import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="东山Π" description="OpenVela 快速入门与工程实践">
      <main className="homepage-hero">
        <div className="homepage-hero__inner">
          <h1 className="homepage-hero__title">OpenVela 快速入门与工程实践</h1>
          <p className="homepage-hero__subtitle">
            基于 DshanPI openvela Devkit（T113S3）开发板的 OpenVela 学习课程 —— 从搭建环境、系统介绍、多任务、驱动、文件系统到项目实战。
          </p>
          <div className="homepage-hero__actions">
            <Link
              className="button button--primary button--lg"
              to="/docs/openvela开发环境搭建与体验/课程介绍与资料下载">
              开始学习
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/category/openvela开发环境搭建与体验">
              浏览课程目录
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
