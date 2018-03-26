//
//  PageManager.m
//  test
//
//  Created by 30san on 2018/3/26.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "PageManager.h"
#import "RNViewController.h"
#import "NextViewController.h"

@interface PageManager ()


@end

@implementation PageManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(push){
  dispatch_async(dispatch_get_main_queue(), ^{
    UIViewController *currentViewController = [self getCurrentViewController];
    NextViewController *vc = [[NextViewController alloc]init];
    [currentViewController presentViewController:vc animated:YES completion:NULL];
  });
}

RCT_EXPORT_METHOD(pop){
  dispatch_async(dispatch_get_main_queue(), ^{
    UIViewController *currentViewController = [self getCurrentViewController];
     [currentViewController dismissViewControllerAnimated:YES completion:NULL];
  });
}

//获取当前viewcontroller
- (UIViewController *)getCurrentViewController{
  UIViewController *currentViewController = nil;
  UIWindow *window = [[UIApplication sharedApplication]keyWindow];
  if (window.windowLevel != UIWindowLevelNormal) {
    NSArray *windows = [[UIApplication sharedApplication]windows];
    for (UIWindow *tmpWin in windows) {
      if (tmpWin.windowLevel == UIWindowLevelNormal) {
        window = tmpWin;
        break;
      }
    }
  }
  UIView *frontView = [[window subviews]objectAtIndex:0];
  id nextResponder = [frontView nextResponder];
  if ([nextResponder isKindOfClass:[UIViewController class]]) {
    currentViewController = nextResponder;
  }else{
    currentViewController = window.rootViewController;
  }
  return currentViewController;
}

@end
