// d3.select();
// d3.selectAll();
// d3.select('h1').style('color', 'red')
// .attr('class', 'heading')
// .text('Updated h1 tag')

// d3.select('body').append('p').text('First Paragraph');
// d3.select('body').append('p').text('Second Paragraph');
// d3.select('body').append('p').text('Third Paragraph');

// d3.selectAll('p').style('')

// var dataset = [1, 2, 3, 4, 5];
// d3.select('body').selectAll('p').data(dataset).enter().append('p').text('D3 is awesome!!');

/*
  @func 查找匹配子节点
  @param(svg) v 需要匹配值
*/
//外部API

/*
  @func 解析为键值对
 */
parseData = data => {
  let arr = [];
  for(let i in data.bpi) {
    arr.push({
      date: new Date(i),
      value: +data.bpi[i]
    })
  }
  return arr;
}
drawLineChart = (data) => {
  let parsedData = parseData(data);
  drawChart(parsedData)
}

drawChart = data => {

  let svgWidth = 600, svgHeight = 400;
  let margin = {top: 20, right: 20, bottom: 30, left: 50};
  let width = svgWidth - margin.left - margin.right;
  let height = svgHeight - margin.top - margin.bottom;

  let svg = d3.select('svg').attr('width', svgWidth)
  .attr('height', svgHeight)

  let g = svg.append('g')
  let x = d3.scaleTime().rangeRound([0, width]);
  let y = d3.scaleLinear().rangeRound([height, 0]);

  let line = d3.line()
  .x(d => x(d.date))
  .y(d => y(d.value))
  x.domain(d3.extent(data, function(d) {return d.date}));
  y.domain(d3.extent(data, function(d) {return d.value}));

  g.append('g').attr('transform', `translate(0, ${height})`)
  .call(d3.axisBottom(x))
  .select('.domain')
  .remove()

  g.append('g')
  .call(d3.axisLeft(y))
  .append('text')
  .attr('fill', '#000')
  .attr('transform', 'rotate(-90)')
  .attr('y', 6)
  .attr('dy', '0.71em')
  .attr('text-anchor', 'end')
  .text('Price ($)');

  g.append('path')
  .datum(data)
  .attr('fill', 'none')
  .attr('stroke', 'steelblue')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round')
  .attr('stroke-width', 1.5)
  .attr('d', line);
}

function svgToCanvas(containerID, options = {}) {

  var parentDom = document.querySelector(`#${containerID}`)

  var svgDom = document.createElement('svg');
  svgDom.setAttribute('id', 'svgId')
  svgDom.setAttribute('width', 200)
  svgDom.setAttribute('height', 200)
  svgDom.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  parentDom.appendChild(svgDom)

  // fetch(api).then(response => response.json()).then(data => {
  //   drawLineChart(data)
  // })
  // .catch(err => console.log(err))

  // 数据集
  let dataset = options.dataset || [];
  // 定义svg图形宽高，以及柱状图间距
  let svgWidth = options.svgWidth || parentDom.clientWidth;
  let svgHeight = options.svgHeight || parentDom.clientHeight;
  let radius =  Math.min(svgWidth, svgHeight) / 2;
  let barPadding = options.barPadding || 10;
  let pieDataset = options.pieDataset || [];
  // 通过图形计算每个柱的宽度
  let barWidth = ((svgWidth - 60) / dataset.length); // 由于有纵坐标轴，右移60

  // x轴比例尺
  let xScale = d3.scaleLinear().domain([0, d3.max(dataset)]).range([0, svgWidth])
  // y轴比例尺
  let yScale = d3.scaleLinear().domain([0, d3.max(dataset)]).range([0, svgHeight])
  // 反y轴比例尺
  let negativeYScale = d3.scaleLinear().domain([0, d3.max(dataset)]).range([svgHeight, 0])

  // 绘制图形
  let svg = d3.select('svg').attr('width', svgWidth).attr('height', svgHeight)
  .attr('class', 'svg-container');

  let line = svg.append('line').attr('x1', 100).attr('x2', 500).attr('y1', 50)
  .attr('y2', 50).attr('stroke', 'red')

  let rect = svg.append('rect').attr('x', 100).attr('y', 100).attr('width', 200)
  .attr('height', 100).attr('fill', '#9B95FF');

  let circle = svg.append('circle').attr('cx', 200).attr('cy', 300).attr('r', 80)
  .attr('fill', '#7CE8D5');

  // 横轴的API使用
  let x_axis = d3.axisBottom().scale(xScale);
  // 纵轴的API使用
  let y_axis = d3.axisLeft().scale(negativeYScale);

  // 在svg中提供了如g元素这样的将多个元素组织在一起的元素
  // 由g元素编组在一起的可以设置相同的颜色，可以惊喜坐标变换等，类似于Vue中的<template>
  svg.append('g').attr('transform', 'translate(50, 10)')
  .call(y_axis);

  let xAisTranslate = svgHeight - 20;
  svg.append('g').attr('transform', `translate(50, ${xAisTranslate})`)
  .call(x_axis)

  // Create group element to hold pie chart
  let pieG = svg.append('g').attr('transform', `translate(${radius}, ${radius})`)

  // d3.scaleOrdinal() 序数比例尺
  // schemeCategory10, 颜色比例尺
  // D3提供了一些颜色比例尺,10就是10种颜色,20就是20种;
  let color = d3.scaleOrdinal(d3.schemeCategory10);
  let pie = d3.pie().value(d => d.percentage);
  let path = d3.arc().outerRadius(radius).innerRadius(0);
  let arc = pieG.selectAll('arc').data(pie(pieDataset)).enter().append('g');
  arc.append('path').attr('d', path).attr('fill', d => color(d.data.percentage));
  let label = d3.arc().outerRadius(radius).innerRadius(0);
  arc.append('text').attr('transform', d => `translate(${label.centroid(d)})`)
  .attr('text-anchor', 'middle').text(d => `${d.data.platform}:${d.data.percentage}%`)

  // rect，长方形
  let barChart = svg.selectAll('rect').data(dataset).enter().append('rect')
  .attr('x', d => 60)
  .attr('y', d => svgHeight - yScale(d) - 40).attr('height', d => yScale(d) + 20).attr('width', barWidth - barPadding)
  .attr('transform', (d, i) => {
    let translate = [barWidth * i, 0];
    return `translate(${translate})`
  })

  let text = svg.selectAll('text').data(dataset).enter().append('text')
  .text(d => d)
  .attr('y', (d, i) => svgHeight - d - 2)
  .attr('x', (d, i) => barWidth * i)
  .attr('fill', '#A64C38')

  drawLineChart(options.lineData)

  var svgHtml = parentDom.innerHTML.trim();

  var canvas = document.createElement('canvas');
  var c = canvas.getContext('2d');

  //新建Image对象
  var img = new Image();

  //svg内容
  img.src = 'data:image/svg+xml,' + unescape(encodeURIComponent(svg));//svg内容中可以有中文字符
  img.src = 'data:image/svg+xml,' + svg;//svg内容中不能有中文字符

  //svg编码成base64
  img.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svgHtml)));//svg内容中可以有中文字符
  img.src = 'data:image/svg+xml;base64,' + window.btoa(svgHtml);//svg内容中不能有中文字符

  //图片初始化完成后调用
  img.onload = function() {
      //将canvas的宽高设置为图像的宽高
      canvas.width = img.width;
      canvas.height = img.height;
      
      //canvas画图片
      c.drawImage(img, 0, 0);

      //将图片添加到body中
      // document.body.appendChild(img)
      // document.body.appendChild(canvas)
      svgDom.remove()
      parentDom.appendChild(canvas)
  }
}

// svgToCanvas('svg-wrap');
