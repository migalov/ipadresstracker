const form = document.querySelector("form"),
      mainInputIP = form.querySelector("[name=main_input_ip]"),
      ipadress = form.querySelector("[name=ip_adress]"),
      localization = form.querySelector("name=localization"),
      timezone = form.querySelector("name=timezone"),
      isp = form.querySelector("name=isp"),
      API_KEY = "at_CGlNf4wvmaC6jgqrB3UA9GBwJj2nr",
      URL = `https://geo.ipify.org/api/v2/country`;

export default {
  form,
  ipadress, localization, timezone, isp,
  API_KEY, URL,
};