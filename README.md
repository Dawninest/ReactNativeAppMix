# ReactNativeAppMix
混合多个ReactNative项目的尝试[iOS]
此文建议有一定ReactNative基础和iOS开发基础之后再阅读

    起因：<br>公司需要在一个平台类的RN项目中，通过跳转打开另外一个RN项目，但是并不想另外一个RN项目出现在手机桌面上,
    安卓版的直接用linking解决了，但是iOS的并不能安装一个不现实的应用，所以没法使用安卓类似的思路解决，
    所以尝试将多个RN项目打包到一起通过iOS原生代码进行切换
    
在RN的iOS项目中，在AppDelegate.m中，是通过这样的代码启用RN模块的：
    
    NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"test"
                                               initialProperties:nil
                                                   launchOptions:NULL];
    rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
    self.view = rootView;
    

可见，通过"index.ios"找到工程项目中指定的启动ReactNative的js文件，然后通过moduleName拿到在启动文件中注册的module信息
在index.ios.js中通过这样的代码来注册moduleName：

    AppRegistry.registerComponent('test', () => test);
    
就是说，如果这里不禁止同时注册多个的话，是可以在iOS原生代码中进行切换不同moduleName的ReactNative项目的，
所以，在此注册多个：

    AppRegistry.registerComponent('test', () => test);
    AppRegistry.registerComponent('test1', () => test1);

然后把AppDelegate.m中启动ReactNative项目的代码拿到新的ViewController中，指定当前ViewController.view = rootView<br>
在这个ViewController中，随便写一个touch方法作为事件响应，点击后也用同样的方法：

    NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"test1"
                                               initialProperties:nil
                                                   launchOptions:NULL];
    rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
    self.view = rootView;

这次设置moduleName为test1，最后发现，是能够顺利切换 ReactNative 项目的
[试验代码已上传，RN版本0.48，需手动 npm install，不解答任何ReactNative运行报错，因为面向有RN基础的人嘛]

## 未解决/验证问题
1.RN项目的 cmd+R / cmd+D 等一系列操作均无法使用了
2.RN的基础页 RCTRootView 是否是个单例，如果我在第一个ViewController加载了一个RN项目，通过Push的方法弹出新的ViewController来加载另外一个RN项目，此时，回到第一个 ViewController ，此时第一个 ViewController 上的RN项目是哪一个？（个人觉得这个应该不会做成单例形势吧）






 
