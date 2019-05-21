import {ContainerImpl} from "./dto/ContainerImpl";
import {EntityImpl} from "./dto/EntityImpl";
import {Container} from "./dto/interfaces/Container";

function init() {
    let container:Container;
    container = new ContainerImpl();

    container.setItemQty(1);
    container.setUid('123321');
    container.setEntity(new EntityImpl('entity_1', 321));

    alert(`qty = ${container.getItemQty()},  uid = ${container.getUid()}, entity = ${container.getEntity().getName()}`);
}

init();
