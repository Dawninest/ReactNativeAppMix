//
//  NextViewController.m
//  test
//
//  Created by 30san on 2018/3/26.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "NextViewController.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface NextViewController ()

@end

@implementation NextViewController

- (instancetype)init
{
  self = [super init];
  if (self) {
    [self initRNView];
  }
  return self;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (void)initRNView {
  NSURL *jsCodeLocation;
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"test1"
                                               initialProperties:nil
                                                   launchOptions:NULL];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  self.view = rootView;
}



@end
