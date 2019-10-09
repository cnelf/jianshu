import React from 'react'
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
  SearchWrapper
} from './style'

const Header = (props) => {
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
              in={props.focused}
              classNames="slide"
            >
              <NavSearch
                className={props.focused ? 'focused' : ''}
                onFocus={props.handleInputFocus} onBlur={props.handleInputBlur}
              />
            </CSSTransition>
            <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62b;</i>
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

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)