import styled from 'styled-components'
import logoUrl from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0
`

export const InnerWrapper = styled.div`
  position: relative;
  height: 56px;
  max-width: 1440px;
  min-width: 768px;
  margin: 0 auto;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100px;
  height: 56px;
  background: url(${logoUrl});
  background-size: 100px 56px;
`

export const Nav = styled.div`
  position: relative;
  width: 960px;
  height: 56px;
  margin: 0 auto;
  padding: 0 15px;
`

export const NavItem = styled.a`
  display: block;
  line-height: 56px;
  padding: 0 15px;
  &.left {
    float: left;
    color: #333;
    font-size: 17px;
  }
  &.right {
    float: right;
    color: #969696;
    font-size: 15px;
  }
  &.active {
    color: #ea6f5a;
  }
  .iconfont {
    font-size: 24px;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    font-size: 21px;
  }
  .iconfont.focused {
    color: #fff;
    background: #969696;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  margin-top: 9px;
  margin-left: 15px;
  border: 1px solid #eee;
  outline: none;
  background: #eee;
  border-radius: 40px;
  box-sizing: border-box;
  padding: 0 40px 0 20px;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 310px;
  }
  &.slide-enter {
    transition: all .4s ease-out
  }
  &.slide-enter-active {
    width: 310px
  }
  &.slide-exit {
    transition: all .4s ease-out
  }
  &.slide-exit-active {
    width: 240px
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const Button = styled.a`
  &.write {
    display: inline-block;
    box-sizing: border-box;
    width: 100px;
    height: 40px;
    line-height: 40px;
    margin: 8px 12px 0;
    padding: 0 12px;
    text-align: center;
    color: #fff;
    background-color: #ea6f5a;
    border-radius: 20px;
    cursor: pointer;
    .iconfont {
      margin-right: 5px;
    }
  }
  &.signUp {
    box-sizing: border-box;
    display: inline-block;
    width: 80px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    margin-right: 5px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 19px;
    color: #ea6f5a;
    cursor: pointer;
  }
`