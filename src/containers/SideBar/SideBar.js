import React from 'react';
import SideBarItem from './SideBarItem/SideBarItem';
import {Menu, Divider} from 'semantic-ui-react';
import './SideBar.scss';
import {SideBarHeader} from './SideBarHeader/SideBarHeader';
import {Subscriptions} from './Subscriptions/Subscriptions';
import {SideBarFooter} from './SideBarFooter/SideBarFooter';

export class SideBar extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SideBarItem path='/' label='ホーム' icon='home'/>
        <SideBarItem path='/feed/trending' label='トレンド' icon='fire'/>
        <SideBarItem label='フォロワー' icon='spy'/>
        <Divider/>
        <SideBarHeader title='ライブラリ'/>
        <SideBarItem label='履歴' icon='history'/>
        <SideBarItem label='後で見る' icon='clock'/>
        <SideBarItem label='高評価した動画' icon='thumbs up'/>
        <Divider/>
        <Subscriptions/>
        <SideBarHeader title='More from Youtube'/>
        <SideBarItem label='Movies and Shows' icon='film'/>
        <Divider/>
        <SideBarItem label='Report history' icon='flag'/>
        <SideBarItem label='Help' icon='help circle'/>
        <SideBarItem label='Send feedback' icon='comment'/>
        <Divider/>
        <SideBarFooter/>
      </Menu>
    );
  }
}
