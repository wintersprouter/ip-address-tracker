# IP Address Tracker
<p align="center">
   <img src="https://raw.githubusercontent.com/wintersprouter/ip-address-tracker/develop/src/assets/images/demo/ip-demo.png"/>
</p>

IP Address Tracker 是一款以 Vue 串接第三方 API 的 IP 地址查詢 app。使用者可以獲得 IP 位置及裝置當前位置;使用者於搜尋列中輸入其他 IP 位置，則可以取得該 IP 詳細資料包括 IP 地址、區域、時差、ISP，並於地圖上顯示位置。

 ## Outline-目錄
- [Live Demo - 專案Demo](#Live-Demo-專案Demo)
- [Features - 實作功能](#Features-實作功能)
- [How to use - 使用說明](#How-to-use-使用說明)
- [Installing - 專案安裝流程](#Installing-專案安裝流程)


 ## Live Demo-專案Demo

 [IP Address Tracker](https://wintersprouter.github.io/ip-address-tracker/#/)
 
 ## Features-實作功能
- CSS 主要使用 Tailwind CSS
- RWD 響應式設計
- 使用 vue2-leaflet 搭配 OpenStreetMap 產生地圖
- 使用 Axios 串接 [ipify API](https://www.ipify.org/) 取得使用者當前 IP 位置
- 使用 Axios 串接 [IP Geolocation API](https://geo.ipify.org/) 取得特定 IP 詳細資料
- 使用 dotenv 保護敏感資訊
- 使用 vue-clipboard2 打造複製功能

 ## How to use-使用說明 
 <p align="center" >
<img src="https://raw.githubusercontent.com/wintersprouter/ip-address-tracker/master/src/assets/images/demo/homepage.png" width=300/>
<p align="center" >
使用者進入首頁即可取得當前 IP 位置及裝置目前於地圖上的位置，可以點擊 COPY 複製 IP 位置。
使用者可以在 Search bar 輸入 IP 可以獲得該 IP 詳細資訊，如下圖所示：
 <p align="center" >
<img src="https://raw.githubusercontent.com/wintersprouter/ip-address-tracker/master/src/assets/images/demo/result.png" width=300/>
<p align="center" >
 使用者點擊 reset 可以回到首頁重新搜尋別的 IP。

## Installing-專案安裝流程
1. 請在終端機輸入
```
$ git https://github.com/wintersprouter/ip-address-tracker.git
$ cd ip-address-tracker
```
2. 
```
$ npm install
```

3. 新增 .env

```
$ touch .env
```

4. 在 .env 中，新增以下內容

```
module.exports = {
  transpileDependencies: [
    VUE_APP_IP_KEY= YOUR_IP_Geolocation_API_KEY
  ]
}

```
5. 

```
npm run serve
```
6. 將可在終端機上看到以下訊息
```
> App running at:
  - Local:   http://localhost:8080/
  - Network: http://<Your Virtual IP>:8080/
```
