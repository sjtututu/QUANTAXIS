GPU版本的qa-community，预安装各种ml/dl库

gpu版仅可用于linux，使用gpu版本要求已经掌握nvidia/docker的安装和使用为基础。
gpu版本使用cuda10和cudnn7，默认安装好tf、keras、xgboost三个框架的gpu版及其他ml/dl库，开袋即食

其他：
web和jupyter都添加http验证防止网络扫描器，用户名密码都是quantaxis，确认网络环境安全的同学请自己注释掉auth_basic和auth_basic_user_file
jupyter使用QAPUBSUB_PWD作为密码
镜像已经安装好pyecharts 0.5，在notebook模式下可正常使用，jupyterlab模式官方未适配。
plt支持中文字体