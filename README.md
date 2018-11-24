# llever.com/exercisms-rust-zh 自动化测试 Cargo test

## 开发

- 1. [已用过 node 库`webdriverio`](#简单命令)
- 2. 从头开始

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


  - [按安装步骤来](#%E6%8C%89%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4%E6%9D%A5)
    - [开启，`selenium`+`geckodriver`](#%E5%BC%80%E5%90%AFseleniumgeckodriver)
  - [集成`selenium`](#%E9%9B%86%E6%88%90selenium)
  - [简单命令(完成以上安装步骤)](#%E7%AE%80%E5%8D%95%E5%91%BD%E4%BB%A4%E5%AE%8C%E6%88%90%E4%BB%A5%E4%B8%8A%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4)
- [话题](#%E8%AF%9D%E9%A2%98)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 按安装步骤来

webdriverio 的自动化测试，需要两样东西

- `selenium` java 库

```bash
curl -O http://selenium-release.storage.googleapis.com/3.5/selenium-server-standalone-3.5.3.jar
```

> 如没有用过 java,像我一样是 Mac 的话，`brew cask install java`,
> 若出现 quarantine 权限问题加上`--no-quarantine`

- `geckodriver` 联系浏览器的驱动(二进制)

```bash
curl -L https://github.com/mozilla/geckodriver/releases/download/v0.21.0/geckodriver-v0.21.0-macos.tar.gz | tar xz
```

#### 开启，`selenium`+`geckodriver`

```bash
java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.5.3.jar
```

> (注意，存放路径，与命令运行路径的关系)

[官方参考](http://webdriver.io/guide.html)

### 集成`selenium`

- [./wdio.conf.js](./wdio.conf.js) 的 `services: ['selenium-standalone'],`注释去掉
  你就不需要，操作以上内容，**但是**，这只不过是将安装过程隐藏在代码命令行之后(没有太强网速，这种办法并不可取)

### 简单命令(完成以上安装步骤)

- `npm install`后

- `npm test`

## 话题

使用自动化框架[webdriverio](https://github.com/webdriverio/webdriverio)
