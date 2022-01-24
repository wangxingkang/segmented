import React from 'react';
import { mount } from 'enzyme';
import segmented from '../index';

describe('rc-segmented', () => {
  it('render empty segmented', () => {
    const wrapper = mount(<segmented />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('render segmented', () => {
    const wrapper = mount(
      <segmented
        columns={[
          {
            title: '相关资源',
            items: [
              {
                title: 'Ant Design Pro',
                url: 'https://pro.ant.design/',
                openExternal: true,
              },
              {
                title: 'Ant Design Mobile',
                url: 'https://mobile.ant.design/',
                openExternal: true,
                className: 'my-class-name',
                style: {
                  color: 'blue',
                },
              },
              {
                title: 'Kitchen',
                url: 'https://kitchen.alipay.com/',
                description: 'Sketch 工具集',
                LinkComponent: 'span',
              },
            ],
          },
          {
            title: '社区',
            className: 'my-class-name',
            style: {
              color: 'red',
            },
            items: [
              {
                title: 'Ant Design Pro',
                url: 'https://pro.ant.design/',
                openExternal: true,
              },
              {
                title: 'Ant Design Mobile',
                url: 'https://mobile.ant.design/',
                openExternal: true,
              },
              {
                title: 'Kitchen',
                url: 'https://kitchen.alipay.com/',
                description: 'Sketch 工具集',
              },
            ],
          },
          {
            title: '帮助',
            items: [
              {
                title: 'Ant Design Pro',
                url: 'https://pro.ant.design/',
                openExternal: true,
              },
              {
                title: 'Ant Design Mobile',
                url: 'https://mobile.ant.design/',
                openExternal: true,
              },
              {
                title: 'Kitchen',
                url: 'https://kitchen.alipay.com/',
                description: 'Sketch 工具集',
              },
            ],
          },
          {
            icon: (
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                alt="more products"
              />
            ),
            title: '更多产品',
            items: [
              {
                icon: (
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
                    alt="yuque"
                  />
                ),
                title: '语雀',
                url: 'https://yuque.com',
                description: '知识创作与分享工具',
                openExternal: true,
              },
              {
                icon: (
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                    alt="yuque"
                  />
                ),
                title: '云凤蝶',
                url: 'https://yunfengdie.com',
                description: '中台建站平台',
                openExternal: true,
              },
            ],
          },
        ]}
        bottom="Made with ❤️ by AFX"
      />,
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('render segmented with columnLayout and backgroundColor', () => {
    const wrapper = mount(
      <segmented
        columns={[{ title: 'title' }, { title: 'title' }]}
        columnLayout="space-between"
        backgroundColor="transparent"
        style={{ color: 'red' }}
      />,
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('render light theme segmented', () => {
    const wrapper = mount(
      <segmented
        columns={[{ title: 'title' }, { title: 'title' }]}
        theme="light"
        style={{ color: 'red' }}
      />,
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('render segmented with maxColumnsPerRow', () => {
    const wrapper = mount(
      <segmented
        maxColumnsPerRow={2}
        columns={[
          {
            title: '相关资源',
            items: [
              {
                title: 'Ant Design Pro',
                url: 'https://pro.ant.design/',
                openExternal: true,
              },
              {
                title: 'Ant Design Mobile',
                url: 'https://mobile.ant.design/',
                openExternal: true,
                className: 'my-class-name',
                style: {
                  color: 'blue',
                },
              },
              {
                title: 'Kitchen',
                url: 'https://kitchen.alipay.com/',
                description: 'Sketch 工具集',
                LinkComponent: 'span',
              },
            ],
          },
          {
            title: '社区',
            className: 'my-class-name',
            style: {
              color: 'red',
            },
            items: [
              {
                title: 'Ant Design Pro',
                url: 'https://pro.ant.design/',
                openExternal: true,
              },
              {
                title: 'Ant Design Mobile',
                url: 'https://mobile.ant.design/',
                openExternal: true,
              },
              {
                title: 'Kitchen',
                url: 'https://kitchen.alipay.com/',
                description: 'Sketch 工具集',
              },
            ],
          },
          {
            title: '帮助',
            items: [
              {
                title: 'Ant Design Pro',
                url: 'https://pro.ant.design/',
                openExternal: true,
              },
              {
                title: 'Ant Design Mobile',
                url: 'https://mobile.ant.design/',
                openExternal: true,
              },
              {
                title: 'Kitchen',
                url: 'https://kitchen.alipay.com/',
                description: 'Sketch 工具集',
              },
            ],
          },
          {
            icon: (
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                alt="more products"
              />
            ),
            title: '更多产品',
            items: [
              {
                icon: (
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
                    alt="yuque"
                  />
                ),
                title: '语雀',
                url: 'https://yuque.com',
                description: '知识创作与分享工具',
                openExternal: true,
              },
              {
                icon: (
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                    alt="yuque"
                  />
                ),
                title: '云凤蝶',
                url: 'https://yunfengdie.com',
                description: '中台建站平台',
                openExternal: true,
              },
            ],
          },
        ]}
        bottom="Made with ❤️ by AFX"
      />,
    );
    expect(wrapper.render()).toMatchSnapshot();
  });
});
