import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  InnerWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoList,
  SearchInfoItem
} from './style'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  showSearchInfo() {
    let { focused, list, page, totalPage, moveIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    let pageList = []
    let newList = list.toJS()
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}><a href="#1">{newList[i]}</a></SearchInfoItem>
        )
      }
    }
    if (focused || moveIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            <div>热门搜索</div>
            <div className="SearchInfoSwitch" onClick={() => handleChangePage(page, totalPage, this.iconRef)}>
              <i ref={(icon) => {this.iconRef = icon}} className="iconfont spin">&#xe852;</i>
              换一批
            </div>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }
  }

  render() {
    let { focused, handleInputFocus, handleInputBlur } = this.props
    return (
      <HeaderWrapper>
        <InnerWrapper>
          <Logo />
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
            <SearchWrapper>
              <CSSTransition
                timeout={400}
                in={focused}
                classNames="slide"
              >
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onFocus={handleInputFocus} onBlur={handleInputBlur}
                />
              </CSSTransition>
              <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62b;</i>
              {this.showSearchInfo()}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className="signUp">注册</Button>
            <Button className="write"><i className="iconfont">&#xe616;</i>写文章</Button>
          </Addition>
        </InnerWrapper>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    moveIn: state.getIn(['header', 'moveIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
      dispatch(actionCreators.getSearchList())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, iconRef) {
      let originAngle = iconRef.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle)
      } else {
        originAngle = 0
      }
      iconRef.style.transform = `rotate(${originAngle + 360}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)