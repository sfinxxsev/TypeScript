import {Dictionary} from "./Dictionary";
import {KeyTypesEnum} from "./KeyTypesEnum";

function init() {
    const firstLineKey = 'firstLine';

    const dictionary = new Dictionary<string, number>();
    const dictionary2 = new Dictionary<KeyTypesEnum, string>();

    dictionary.put(firstLineKey, 1);
    dictionary.put('secondLine', 2);
    dictionary.put(null, 2);

    dictionary2.put(KeyTypesEnum.PRIMARY, '1111');
    dictionary2.put(KeyTypesEnum.SECONDARY, '2222');

    alert('first line = ' + dictionary.get(firstLineKey));
    alert(dictionary.getKeys());
    alert(dictionary.getValues());

    alert('selected type = ' + dictionary2.get(KeyTypesEnum.SECONDARY));
    alert(dictionary2.getKeys());
    alert(dictionary2.getValues());
}

init();
