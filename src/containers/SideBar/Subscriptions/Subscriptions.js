import React from 'react';
import {Subscription} from "./Subscription/Subscription";
import {Divider} from "semantic-ui-react";
import {SideBarHeader} from '../SideBarHeader/SideBarHeader';

export class Subscriptions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBarHeader title='Subscriptions'/>
        <Subscription label='MusicFun       -     12M' />
        <Subscription label='Pinkesh ♪      -     5.2B' />
        <Subscription label='Shaan 8.9      -     10.7B' />
        <Subscription label='Mr.Beast       -     51M' />
        <Subscription label='ShaanCoding    -     9M' />
        <Divider/>
      </React.Fragment>
    );
  }
}