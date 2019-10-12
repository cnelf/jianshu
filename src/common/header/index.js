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
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            <div>热门搜索</div>
            <div className="SearchInfoSwitch">换一批</div>
          </SearchInfoTitle>
          <SearchInfoList>
            {this.props.list.map((item) => {
              return (
                <SearchInfoItem key={item}><a href="#1">{item}</a></SearchInfoItem>
              )
            })}
          </SearchInfoList>
        </SearchInfo>
      )
    }
  }

  render() {
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
                in={this.props.focused}
                classNames="slide"
              >
                <NavSearch
                  className={this.props.focused ? 'focused' : ''}
                  onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}
                />
              </CSSTransition>
              <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62b;</i>
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
    list: state.getIn(['header', 'list'])
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)