import { Target } from "./target";
import { Adapter } from "./adapter";
import { Adaptee } from "./adaptee";

function clientCode(target: Target) {
	return target.request();
}

// ======================= Usual worked prototype ==============
const target = new Target();
const res = clientCode(target);
console.log(res);

// ======================== Encoded =========================
const adaptee = new Adaptee();
console.log(adaptee.specificRequest());

// ======================== Using adapter (encoded to usual) ======================
const adapter = new Adapter(adaptee);
const res2 = clientCode(adapter);
console.log(res2);

/*
1) Удобный паттерн для преобразования данных.
2) Удобно вариировать данные в зависимости от необходимых условий.
3) С помощью адаптера происходит преобразование данных не затрагивая нативного фукционала.
    Как следствие не ломаются тесты, зависимости. 
4) Сохраняются все правила, функции, интерфейсы нативных класов.
*/
