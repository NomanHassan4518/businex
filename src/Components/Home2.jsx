import React from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import "../App.css";

// import required modules
import {  Navigation } from 'swiper/modules';
import { } from 'swiper/modules';
import Service0 from './Service0';
import FunFact from './FunFact';
import ExtraLinks from './ExtraLinks';
import AutoPlaySlider from './AutoPlaySlider';
import Test2 from './Test2';

const Home2 = () => {

  const home = [
    {
      img: "https://businex.jamstacktemplates.dev/static/media/h-2-01.4ba75338.jpg",
      h2: "Provide the best solutions for your business",
      p: "Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly.",
    },
    {
      img: "https://businex.jamstacktemplates.dev/static/media/h-2-02.0125d317.jpg",
      h2: "Invest with us Grow Business",
      p: "Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly.",
    },

  ]

  

  const aboutBottom = [
    {
      title: "Creative Team",
      icons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDJGRDlFMDE2MEMxMTFFOUE4ODNDNDI3MDNBRTBCOUMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJGRDlFMDA2MEMxMTFFOUE4ODNDNDI3MDNBRTBCOUMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZGRmODI5My0xZjYzLWU3NDktYmFkMS0yYTJhMTFjZTNlNjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZGY0YWRjYTUtODJmMy1hOTQ4LThlZGQtNjRhZWEwZjFiOTNkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xfMAVwAAA71JREFUeNrUmF1IFFEUx9d13TCzIMjKjz7MrOz7Qwqhh83QlzboJeqhom+wyIcgfCionoIslCjJh0p6DROCqIfEh9geKgsrRRMkMYR0s1o/8rtz6H/ptszu3JnZqZkDP2aYe8+958yce+bc6/XYJ1uJx8QPwPfbPC6TPcQYMU1EiJ+4H0ObK2QOESYmiDNEMpGCe372FX0cL/vw9us02u6hbX+iJ/Xa4EgOrq812ppxzXaDI924Fmq0FUb1cbSkE33EFFFO+IlUrBF+1k/MdsuC3y1lqmFiHPejaHOVbCIeEl8A32/2uFjSga2S6MWeRASIO0QnQkr82fm+g7iLPklOffMriRDWgoAXdhvoj2rjviuc5sRGYgAGthKniHyNfvloa0Xf76jJHCFpxCcYVkn4FHR86DsN3TQnOFIOg54ajPsk6EzjH/PfpRHGBEzoBqDbaNUIXwIcWYPrARSMRiQF1wInODKK62ELY4w7wZHtRJ7FMTrd8GffAVwvotayVfRCaxaxgZgk3hIjJubwW7AvFfMnY/5BowOw4mViSCopuF46a6JG+gaM1mznMKeYfwg2JRsZ6CaU+Q08IBqkU5FL/8CRi9KpSwNsiODZLSPF3yROO+RstAWbJE63mTY6kok5hjGnkDzYxLvMVSplfCmeV0elxVdELWK+2MZ1W4w5ajGnnKKrEXYlKo6I/fSARltEWoQqchLjMccVdWbiGtZoEzYpnYsFEYvPohY2Z7g3aCtSdGIKYTKK+2MKekWYo1kqYUQCEHWd0r6fDf4AhXpiJ8JNVKovFDKX7MQuIJw5qpCxQlJFXQob6vGszUhFspzoitrRiU2T3uHaCcmJoPRcduaIzhjZ0suU6TJTYPLPsIy47/l9/MlhMUNHZyEyXqxjnyDaJhTOtvz4enWw4TRsivnjiyVZeAt8KthO9MLIgTg6w9C5QjzRaO9AaL4knus4shhh1g29HpyVKaXyJfgZ9mp8VkEPtqlZNqTebIz9Oc78bNsN2PrXwpIX6HWkP47jFhBGv3nEOmIt+g9KoZcIOYiXKMLnHebvgwNzifWwwYuShUum2/IgZejMG5xrOm97KVEDZ6dggFU5JI1XgznihXyl588xbJls2Ajir8TA5HuxaHnNZFhwIgNjTGBMVSmBzSPCcXEsc8GEEVXQrbDgSAXGqDKhex66Vz1Svp5vYqAC6DZZcKQJY6w2obsAuu/5D7kMsRkyMZCo1XIsOCJ0H8Eoo8K2L/IhO3C5nGvBmI8WdXN1FrietP8SYADXySCtjQ5InwAAAABJRU5ErkJggg==",
      desc: "We have creative team, they always ready to help you."

    },
    {
      title: "Best Service",
      icons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAApCAYAAAAiT5m3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEJCOTdDRUU2MEMxMTFFOUE3REVBQzE2M0ZGMUYwNkUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEJCOTdDRUQ2MEMxMTFFOUE3REVBQzE2M0ZGMUYwNkUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZGRmODI5My0xZjYzLWU3NDktYmFkMS0yYTJhMTFjZTNlNjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZGY0YWRjYTUtODJmMy1hOTQ4LThlZGQtNjRhZWEwZjFiOTNkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UouCBgAABNhJREFUeNq0mAtoVmUYxz+3MnM6a7a1aS7LrJWV0kVmEpsNRS27TSxrrIi0JRZ29dJFA9GUsIulRbTMoJKky6Cr3SbdLEsblVRK5nJLzWx5Icta/0d+J15eznvOt1EP/GDnPe85z/c+97NMpuNSLJaLn0SLeEIUZv5nOVN8J74Sl4krxDfiS3H6f60sV+SLGvGreFb0cu4fKV4Qv/BjeopD0l7aJbB2uRgrCkQPcZToJxaJOTHP5Ii54gaxWewSe8TPokGsTFNsp3tETBBrxFbRii9XY+IkGSyGixJxND92mHhK3CT+Dj14qdgtzktRMF4sFg+JW0SlODywdwynH+ObyBVT+Jl4x1vvKmaIZfxdJk4Ux4ta8aJYK66P8e9rBN+IpJM8L1Z4a6XiA7Fd3BYInNPEfLFTvIupXWnA3EF5AxNG0ldswN8nZJEBJ4svxHoCMpJ68UrI1DlsbnHM+ww+rxIbs1C8AX+bVZ523r+VDImVarFXnM11nfgty5MeixtGcT2Id9Vyfa7YJ873HxyEknu57iaaxIIszbuRirZNjGP9YfEpljN5gBgYGD1YQH42OKYppwgMzkJpC1GdRyws5d4wFA3h2sz/plhHdTtYMDZ5PqjjBLmORS4Q3Z09p6L0JfbNFG2YNUNe/+iYO0NRaRb3ZVB6rXeSe5xcrqQT7SVVCsjhZsdKs8SfFBZX1pD/rtxoFraHDojDAvXXZCI+LKMhWEF4FZNdKKaL2dT3lTElud1bM11/2R8Lqcd9nZuTxPcov4SSV41v1uJTe+ntYn/MSTP4vIWuFkl/GsecaMNH4n2n3p5Bm4tSyxT8QduL/D4Ta00IBF4lSk7huidR/p5b10vx41KneNimJc6LZqBoEqbdn6DU5ElK7aFYZxlx4ZfTg8m/z4nKGq7dlJpGFdqM6UNilvqdbmcykndVhIaCT8SdTnC9TFoVe02jOEGp9eAfxHPO2jxcGVur2ykakSmsaV+Nr+2hs1jfglvipJy9tmeys17Cu4P92GaqIud6F/XVKlujeAxX5HnRW8G0+Ta5O44SHEkhVexf8Xtrq3OySCwyL8LnU/n7AKli7ulDpFv6XRPTz6OK1ZRUe0dTocY7aePHgY2xV4k7qFi1DAKhCfVKAqsybcqcz7TYxGk3MX18iLmTpAo/92YsKiIrFlKGU2Ukm+v5tTvx2ZLAUNcDH7cRJ7u5XpA2a4WkhB47ltPsEG/hM3c8Wk2kV5DfrUkTRzYyj4iOmvkA8THtbipT5RZc0I891jq/FXd1Vmk+kXprzPoihrp2mnuet2c231TdO6O4huDqE7g/FF8Oj7nXH19Xd1RpDhWoPmHPYswe+kCzj7tVgcwJSnSa8sD9IoJpcsI7RhDlQzqi+HEiNSRTiNwjUqxmrfXBjnzxb/eGNL/Mfs5naSW5nRvYW8cP7J2N4mlEZBeisswrGlXOoD+UvnuOc9+eOYnZvCvz2nVpSvP47llF5VpPW1zuBIk1gdedZxqZNiJrrOCZddSBRoKwW5LigQTENirUdEy+h+pVSKu82HlmIiU1n+bSxtosRuQdpGVp2v87LAqP89YfpUmYFb6mNkfSC3PO5dv6fq8JDaCj5XSmmByDFdqZOH25m3vNKWNRp+Rm/FYSc6+UNjol25f9I8AA3sspDeok1VsAAAAASUVORK5CYII=",
      desc: "We have creative team, they always ready to help you."

    },
    {
      title: "Online Support",
      icons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAoCAYAAAB99ePgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTQwRjYxNUI2MEMxMTFFOThDODBCNTlENUQyNkIzMzIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTQwRjYxNUE2MEMxMTFFOThDODBCNTlENUQyNkIzMzIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZGRmODI5My0xZjYzLWU3NDktYmFkMS0yYTJhMTFjZTNlNjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZGY0YWRjYTUtODJmMy1hOTQ4LThlZGQtNjRhZWEwZjFiOTNkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+avZPHwAABT9JREFUeNrEmHuQlWMcx88521K7aStW2a1oJJkwMiZpEjVUcts/lFy6kMtkUqN1aRjbyC00ocLEyGVcy7g0LrNKaMmksCM2RdG6q0Wtaleb4/trPq95entvZ9H+Zj5z5rzvc/k9z/O7PW8qte/kYLFCZBPwqxjZ6j+c3MYqFFtC3l8t2oozRFPMWGeL2elmKlLAJIPFieJw0Z53O0Wd2ChWiefEe+JBUSQuEeMixv6QRVTlunOHianiIpHPpG+IteIndqSdOFD0FP1EH9p5sr+4IWKOe8RnuShVSKdG8akYLw7IcWG2c08nbDvAbC/Jzh0nFrDVdhzPi7/+hW3aoqp9z+qZx8Z+29u5OOVOFq/SwWzlt4A2+4lTRW/RSfwuPuAodwW0/1M87HvWyO8isT6BXqnTxDaOMx2iVDnGb06wWrwl1qCU2eBkkUf7u9iR0xnb6OYzHe/53YSTQDmGrZ4Z8v4g8yZ28lrHU92YdjNjLMZJSsUnvng2gvZDxAbnuY17cdDEbcQXbHE65H01jtEtZvd7Melrzg6m6GdKDBRPYsOPBCxyL7lTfCc6Rrj6j6JLQgfoRWCe7Dwb5uzQWmw2Vg4VDeLCkPfFYnvE+zCx2PgzMc5kCnZ6OyeRSGZzZGGZ40p2LdfgXcSih/F/gjjW18bsbqH/RNJMZilpqxgTMcljxLwgaS2u99mWK8vEjJB3+Xh5Fie6xnRqRRxbKmpR9AWRCQm0h4iaEO+1fqeIvgTrP3xtbPySEOUmic6EoEox3Y47w58KMVZ8LO7leMPSWKPzv4RYtwYFy8QJGPlEgrInW0N2tR1hZxrB27z7KNLd7iNd7cQYi9DDQ5Sr4mgWY+BZbPAmx7DbE0TreP+9eDEmt/ZDjzs4/j1kEDtyW4z3VJF+bNL5HGGYjVkG6S9eoX1jgsQ/Smx2C8QUubO7+CGB533F8a6k9goTW8RybLQnfeKklnLLnHN7xnmRRLEdOM+WHEPJ5piFuNWJV7mkMgEu3SGicyWOUxoRC4PkCHFmDu2zfuXysIl38LwguU/MZRGdE05UjP19m7DWS/nDkCn2DGVKDSElKgnPxO3jxBb/tbiRAP5ETPsLXIfw5HG2spIjq8FGikIG6c19Yajv+UQuNR5eiFqHt46OUW6WeNd9MI5kfilaW6nclQGXEyTDBtokTvJVGzPAu6MuJMGXJdjpamLkP/KR8+B4yuynuPZlqWCDxEzhUaoLO7JziXvnkX93kW2SOk4n+gxyH1q1cJbzvy8K7qDsLggZrBQPXEdq2sliGjDolZTkxQmVK6eO3KPi+cVnC2bEn5NGXMWs+LxOvEmfLApt5K4xhDA0iucb2Akvxb1Ogi8MySbmOLf4X1iZ/L6ThkoYsI/vTmFB+hsxR1xOgm/NsT2AghUY/jT6tSVvWh04j0uP5e4ePh2uYvf3qr67Uy7PZ6IMdrgCb23DqhZF5N00dwBb1K0xRedSLjpejO1CCCsP69QfzecxkXX4kh29grTSIUFMG5Hwk0aTY/hz2Yj8qE4DOZo5KNgVu2kKqCaOxoY6NvPWv0Q85FTQJUk6DUbBWc6R1xIYC5zaq47YuCoiUEfJBJwkE9UoKAYNpQa7n69BPSip7C77LFWyhY9z2IF6SvRcPyROoaxfluvKhuN10/l/JJfoBqraJi4hnm1m8eb1OTK1uV+DylCwImCnxxLLJmGbm6hm8vbhZ9zdqagp5GPfeILsy7S5LNUCcj6TlwfY6xJ2d2SqBWU0x7gARcYQTOv5NtziMoAr4TYKg5eId/+b/C3AANQ0cCIcvS+bAAAAAElFTkSuQmCC",
      desc: "We have creative team, they always ready to help you."

    },

  ]

  
  const blog = [
    {
      title: "Wild Life Workshop",
      desc: "Habitat loss, climate change, poaching, and pollution paint a bleaked climate changed, poaching picture for threatened",
      name: "By: KB Arifa",
      date: "Feb 14, 2020",
    },
    {
      title: "Weekend trip",
      desc: "Treat yourself to a night re-living the golden age of the railway with a stay at The Old Railway Station in Petworth, West Sussex.",
      name: "By: Aslam Hasib",
      date: "Feb 13, 2020",
    },
    {
      title: "Discovering Paris",
      desc: "The most important enjoy your lif thing is to enjoy your life - to be happy - it's enjoy your lif all that matters.",
      name: "By: Kajal Akter",
      date: "Feb 12, 2020",
    },
  ]



  return (
    <>
      <div className=''>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {
            home.map((a) => (
              <SwiperSlide>
                <div className="slider111 text-light" style={{ backgroundImage: `url(${a.img})` }}>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-12 ">
                        <div className="slider11  ">
                          <h2 className='text-light'>{a.h2}</h2>
                          <p>{a.p}</p>
                          <div className="home_btn">
                            <button ><a href='/' style={{ textDecoration: "none" }}>Learn More</a></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }

        </Swiper>
      </div>


      <div className="about sm-top">
        <div className="container">
          <div className="row  align-item-lg-center">
            <div className="col-md-6 col-lg-6 ">
              <div className="about-content1 " >
                <h6>ABOUT US</h6>
                <h2 className='home2about'>We Make Relationship Between Business & Professionals</h2>
                <span className="about-since">Since 2010</span>
                <p>
                  <strong>Busines</strong>
                  always try to provide the best Business Solutions for Clinets to grow up their Business very sharply and smoothly. We voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>


                <a href='/'>
                  <p>More Details <span><AiOutlineDoubleRight className='moreIcon' /></span></p>
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="about_img1 my-5">
                <img src="https://businex.jamstacktemplates.dev/static/media/about-2.3e593410.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>



<div>
  <Service0/>
</div>



      <div className="container">
        <div className="row  mt-5">

          {

            aboutBottom.map((a) => (
              <div className="col-md-4">
                <div className="icon-box d-flex">
                  <div className="icon-box__icon">
                    <img src={a.icons} alt="" />
                  </div>

                  <div className="icon-box__info">
                    <h5>{a.title}</h5>
                    <p>{a.desc}</p>
                  </div>

                </div>
              </div>
            ))
          }
        </div>
      </div>

<div>
  <Test2/>
</div>


      <div className="blog blogs1 sm-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog_text text-center">
                <h6>OUR BLOG</h6>
                <h2>Latest update
                  from our blog post</h2>
              </div>
            </div>

            <div className="row">
              {

                blog.map((a) => (
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="blogBox container">
                      <h4 className='pt-4 px-4'>
                        <a href='/'>{a.title}</a>
                      </h4>
                      <p className='pt-2 px-4'>{a.desc}</p>
                      <div className="boxBottom  px-4 d-flex justify-content-between ">
                        <p><a href='/'>{a.name}</a></p>
                        <p><a href='/'>{a.date}</a></p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>


        </div>


       <AutoPlaySlider/>
      </div>

  <FunFact/>

    <div>
      <ExtraLinks/>
    </div>
    </>
  )
}

export default Home2
