import { Singleton } from "./instance";

function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log("Singleton works, both variables contain the same instance.");
  } else {
    console.log("Singleton failed, variables contain different instances.");
  }
}

clientCode();

/*
1) Полезно для БД Чтобы открывать и использовать только 1 общий инстанс.
2) Очень простой.
3) Полезно для headless браузеров или внешних программ,
    Которые открываются и используются до закрытия.
*/
