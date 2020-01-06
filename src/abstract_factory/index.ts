import { AbstractFactory } from "./interface";
import { Factory1 } from "./factory1";
import { Factory2 } from "./factory2";

// ============== Принимает тип фабрики / нового нужного обьекта (1,2) ==========
function clientCode(factory: AbstractFactory) {
	const AbstractButton = factory.createButton();
	const AbstractInfo = factory.createInfo();
	return {
		button: AbstractInfo.createInfoToButton(AbstractButton),
		text: AbstractInfo.createInfo(),
	};
}

// ======================== START ==========================
const first = clientCode(new Factory1());
console.log(first);

const second = clientCode(new Factory2());
console.log(second);

/*
Итоги: 
1) Приемлимо только для больших проектов или при полном рефакторинге проекта
2) Очень много разных продуктов и как следствие очень много файлов. 
	В данном примере 2 продукта с 2 типами 
	|[VisibleButton|HiddenButton]|
	|[Info1 	   |Info2	    ]|
3) Полезно для масштабированя. Легко добавить новые продукты либо доп типы и инфо.
4) Получается своего рода таблица. Проще использовать БД / Mock / GraphQL
*/
