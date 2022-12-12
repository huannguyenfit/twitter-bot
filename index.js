






const chrome = require('selenium-webdriver/chrome');

var webdriver = require('selenium-webdriver');

require('chromedriver');

var driver;
var logContent = '';

async function process() {

  const fs = require('fs')
  const datas = fs.readFileSync('./account.txt', 'utf8')
  var accounts = datas.split('\n');


  for (var i = 0; i < accounts.length; i++) {
    try {
      var account = accounts[i].split('|');
      username = account[0];
      password = account[1];
      email = account[2]
      logContent += '\n' + username;
      driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
      await run();
      logContent += ' - success'
    }
    catch (ex) {
      console.log(ex)
      logContent += ' - error - ' + ex;
    }
    await driver.quit();

  }
  fs.writeFileSync("logs.txt", logContent);
}
process();
async function run() {
  await navigate('https://twitter.com/i/flow/login', 3000);
  await setUser();
  await setPassword();
  await setEmailIfNeeded();
  await navigate('https://twitter.com/pumlhealthio/status/1489474453033701379');
  await like();
  await retweetHitShowPopup();
  await retweetConfirm();
  await typeComment();
  await sendComment();
  await hitShowBannerMenu();
  await hitLogout();
  await logoutConfirm();
  await navigate('https://twitter.com/i/flow/login');
}

function navigate(url, timeout) {
  return new Promise(function (resolve, reject) {
    setTimeout(async function () {
      driver.get(url);

      resolve();
    }, timeout)
  });
}

function like() {
  return new Promise(function (resolve, reject) {
    setTimeout(async function () {////*[@id="id__6zb7lcrxm7x"]/div[3]/div
      if (!await driver.findElements(webdriver.By.css('.css-1dbjc4n.r-18u37iz.r-1h0z5md div[data-testid="like"]')).length > 0) {
        let element = driver.findElement(webdriver.By.css('.css-1dbjc4n.r-18u37iz.r-1h0z5md div[data-testid="like"]'));
        element.sendKeys(webdriver.Key.ENTER);
        resolve();
        return;
      }
      throw 'error';
    }, 7000)
  });
}
function retweetHitShowPopup() {
  return new Promise(function (resolve, reject) {
    setTimeout(async function () {
      if (!await driver.findElements(webdriver.By.css('.css-1dbjc4n.r-18u37iz.r-1h0z5md div[data-testid="retweet"]')).length > 0) {
        let element = driver.findElement(webdriver.By.css('.css-1dbjc4n.r-18u37iz.r-1h0z5md div[data-testid="retweet"]'));
        element.sendKeys(webdriver.Key.ENTER);
        resolve();
        return;
      }
      throw 'error';
    }, 7000)
  });
}
function retweetConfirm() {
  return new Promise(function (resolve, reject) {
    setTimeout(async function () {
      if (!await driver.findElements(webdriver.By.css('.css-1dbjc4n.r-13awgt0.r-12vffkv div[data-testid="retweetConfirm"]')).length > 0) {
        let element = driver.findElement(webdriver.By.css('.css-1dbjc4n.r-13awgt0.r-12vffkv div[data-testid="retweetConfirm"]'));
        element.sendKeys(webdriver.Key.ENTER);
        resolve();
        return;
      }
      throw 'error';
    }, 7000)
  });
}

function typeComment() {
  return new Promise(function (resolve, reject) {
    setTimeout(async function () {
      if (!await driver.findElements(webdriver.By.css('.css-1dbjc4n.r-16y2uox div[data-testid="tweetTextarea_0"]')).length > 0) {
        let element = driver.findElement(webdriver.By.css('.css-1dbjc4n.r-16y2uox div[data-testid="tweetTextarea_0"]'));
        element.sendKeys('Amazing', webdriver.Key.ENTER);
        resolve();
        return;
      }
      throw 'error';
    }, 3000)
  });
}

function sendComment() {
  return new Promise(function (resolve, reject) {
    setTimeout(async function () {
      if (!await driver.findElements(webdriver.By.css('.css-1dbjc4n.r-16y2uox div[data-testid="tweetButtonInline"]')).length > 0) {
        let element = driver.findElement(webdriver.By.css('.css-1dbjc4n.r-16y2uox div[data-testid="tweetButtonInline"]'));
        element.sendKeys(webdriver.Key.ENTER);
        resolve();
        return;
      }
      throw 'error';
    }, 5000)
  });
}

function setUser() {
  return new Promise(function (resolve, reject) {
    setTimeout(async function () {
      if (!await driver.findElements(webdriver.By.css('input[type=text]')).length > 0) {
        let element = driver.findElement(webdriver.By.css('input[type=text]'));
        element.sendKeys('trichenblitzau1', webdriver.Key.ENTER);
        resolve();
        return;
      }
      throw 'error';
    }, 7000)
  });
}

function setPassword() {
  return new Promise(function (resolve, reject) {
    setTimeout(async function () {
      if (!await driver.findElements(webdriver.By.css('input[type=password]')).length > 0) {
        let element = driver.findElement(webdriver.By.css('input[type=password]'));
        element.sendKeys('avHKgav1452', webdriver.Key.ENTER);
        resolve();
        return;
      }
      throw 'error';
    }, 7000)
  });
}
function setEmailIfNeeded() {
  return new Promise(function (resolve, reject) {
    setTimeout(async function () {
      if (!await driver.findElements(webdriver.By.css('input[type=text]')).length > 0) {
        let element = driver.findElement(webdriver.By.css('input[type=text]'));
        element.sendKeys('trichenblitzauj3@hotmail.com', webdriver.Key.ENTER);
        resolve();
        return;
      }
      throw 'error';
    }, 7000)
  });
}

function hitShowBannerMenu() {
  return new Promise(function (resolve, reject) {
    setTimeout(async function () {
      if (!await driver.findElements(webdriver.By.css('.css-1dbjc4n.r-obd0qt div[data-testid="SideNav_AccountSwitcher_Button"]')).length > 0) {
        let element = driver.findElement(webdriver.By.css('.css-1dbjc4n.r-obd0qt div[data-testid="SideNav_AccountSwitcher_Button"]'));
        element.sendKeys(webdriver.Key.ENTER);
        resolve();
        return;
      }
      throw 'error';

    }, 7000)
  });
}


function hitLogout() {
  return new Promise(function (resolve, reject) {
    setTimeout(async function () {
      if (!await driver.findElements(webdriver.By.css('.css-1dbjc4n.r-aqfbo4.r-1xcajam a[data-testid="AccountSwitcher_Logout_Button"]')).length > 0) {
        let element = driver.findElement(webdriver.By.css('.css-1dbjc4n.r-aqfbo4.r-1xcajam a[data-testid="AccountSwitcher_Logout_Button"]'));
        element.sendKeys(webdriver.Key.ENTER);
        resolve();
        return;
      }
      throw 'error';
    }, 7000)
  });
}

function logoutConfirm() {
  return new Promise(function (resolve, reject) {
    setTimeout(async function () {
      if (!await driver.findElements(webdriver.By.css('.css-1dbjc4n.r-12vffkv div[data-testid="confirmationSheetConfirm"]')).length > 0) {
        let element = driver.findElement(webdriver.By.css('..css-1dbjc4n.r-12vffkv div[data-testid="confirmationSheetConfirm"]'));
        element.sendKeys(webdriver.Key.ENTER);
        resolve();
        return;
      }
      throw 'error';
    }, 7000)
  });
}

// trichenblitzau1|avhkgav1452|trichenblitzauj3@hotmail.com|guZpXT56
// driver.getTitle().then(function(title) {
//   console.log('Page title is: ' + title);
// });

//driver.quit();



// const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch({ headless: false });;
//     const page = await browser.newPage();
//     await page.goto('https://twitter.com/i/flow/login');

//  var inputEmailClassName = '.css-901oao .r-1awozwy'

//    var abc =  await page.waitForSelector(`${inputEmailClassName} input[type=text]`);
//    console.log(abc)
//     await page.type("input", "heathercan16f");

//     // await page.evaluate(() => {

//     //         await page.type("input", "heathercan16f");
//     //         await page.waitForNavigation();
//     //         //await page.click(".css-18t9 .css-1dbjc4n ..r-sdzlij ..r-1phboty ..r-rs99b7 ..r-ywje51 ..r-usiww2 ..r-2yi16 ..r-1qi8awa ..r-1ny4l3l ..r-ymttw5 ..r-o7ynqc ..r-6416eg ..r-lrvibr ..r-13qz1uu");
//     //     }, 6000)
//     // });


//     //await browser.close();
// })();






  //  let el = await driver.findElement(webdriver.By.className(`${inputEmailClassName}`));
  // await driver.wait(until.elementIsVisible(el),6000);
  //   await el.sendKeys('heathercan16f', webdriver.Key.ENTER);

  // driver.wait(async function() {
  // var el = driver.wait(webdriver.until.elementLocated(webdriver.By.className(`${inputEmailClassName}`)));
  // await el.sendKeys('heathercan16f', webdriver.Key.ENTER);
  //   return true
  // }, 1000);
  // var el2 = driver.wait(webdriver.until.elementLocated(webdriver.By.className(`${inputEmailClassName}`)));
  // await el2.sendKeys('HGdav1310', webdriver.Key.ENTER);

  // let el2 = await driver.findElement(webdriver.By.className(`${inputEmailClassName}`));
  // await driver.wait(until.elementIsVisible(el),6000);
  // await el2.sendKeys('HGdav1310', webdriver.Key.ENTER);

  // await (new Promise(function (resolve, reject) {
  //   setTimeout(async function () {
  //     element = driver.findElement(webdriver.By.css('input[type=text]'));
  //     element.sendKeys('clarenellie4jr0', webdriver.Key.ENTER);
  //     resolve();
  //   }, 6000)
  // }));
  // await (new Promise(function (resolve, reject) {
  //   setTimeout(async function () {
  //     element = driver.findElement(webdriver.By.css('input[type=password]'));
  //     element.sendKeys('yRye6691', webdriver.Key.ENTER);
  //     resolve();
  //   }, 5000)
  // }));
