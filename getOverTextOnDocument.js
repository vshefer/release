    // 一个文本在限定dom宽度,限定字体大小下该怎么显示
    getOverText(str, width, fontSize = 12) {
      // 默认传参正确
      var ellipsisStr = '...'

      var rangeWidth = this.getDomRealLength(str)

      if (rangeWidth < width) {
        return str
      } else {
        var len = str.length
        var index = Math.floor(width / rangeWidth * len)
        var ellipsisStrWidth = this.getDomRealLength(ellipsisStr)

        while ((this.getDomRealLength(str.substr(0, index)) + ellipsisStrWidth) > width) {
          index--
        }

        while ((this.getDomRealLength(str.substr(0, index)) + ellipsisStrWidth) < width) {
          index++
        }

        return str.substr(0, index) + ellipsisStr
      }
    },

    // 获取文本在dom上实际长度
    getDomRealLength(str, fontSize = 12) {
      var dom = document.createElement('div')
      // dom.style.width = `${width}px`
      dom.style.fontSize = `${fontSize}px` // 默认字体12像素
      // dom.style['text-overflow'] = 'ellipsis'
      // dom.style['white-space'] = 'nowrap'
      // dom.style.overflow = 'hidden'

      dom.innerText = str
      document.body.appendChild(dom)

      var range = document.createRange()
      range.setStart(dom, 0)
      range.setEnd(dom, dom.childNodes.length)
      var rangeWidth = range.getBoundingClientRect().width
      document.body.removeChild(dom)
      return rangeWidth
    }
