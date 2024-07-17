import { Visitor } from '../../augment';

type XmlNode = XmlNode[] | string;

type JsonNode = {
    [key in string]: JsonNode[] | string | number | boolean | null;
};
type Data = {
    xml: XmlNode;
    json: JsonNode;
    1: number;
};

class TestVisitor implements Visitor<Data> {
    public visitXml(val: XmlNode) {
        console.info(val);
    }
    public visitJson(val: JsonNode) {
        console.info(val);
    }
}

const aVisitor = new TestVisitor();

console.info(aVisitor.visitXml([['test', 'test', 'test'], [['test']]]));

console.info(
    aVisitor.visitJson({
        a: true,
    }),
);
