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
function svgToCanvas(containerID) {

  var svgDom = document.createElement('svg');
  svgDom.setAttribute('id', 'svgId')
  svgDom.setAttribute('width', 200)
  svgDom.setAttribute('height', 200)
  svgDom.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  document.querySelector(`#${containerID}`).appendChild(svgDom)
  
  // 数据集
  let dataset = [80, 100, 56, 120, 180, 30, 40 ,120, 160];
  // 定义svg图形宽高，以及柱状图间距
  let svgWidth = 500, svgHeight = 300, barPadding = 5;
  // 通过图形计算每个柱的宽度
  let barWidth = (svgWidth / dataset.length);
  
  // 绘制图形
  let svg = d3.select('svg').attr('width', svgWidth).attr('height', svgHeight);
  
  // rect，长方形
  let barChart = svg.selectAll('rect').data(dataset).enter().append('rect')
  .attr('y', d => svgHeight - d).attr('height', d => d).attr('width', barWidth - barPadding)
  .attr('transform', (d, i) => {
    let translate = [barWidth * i, 0];
    return `translate(${translate})`
  })

  var svgHtml = document.getElementById(containerID).innerHTML.trim();

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
      document.body.appendChild(canvas)
      document.querySelector(`#${containerID}`).remove()
  }
}

// svgToCanvas('svg-wrap');
