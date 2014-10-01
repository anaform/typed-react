/// <reference path="../typings/mocha/mocha.d.ts" />
import chai = require("chai");
import TypedReact = require("../src/index");
import React = require("react");

var expect = chai.expect;

interface FactoryProps {
    name: string;
}

interface FactoryState {
}

class FactoryTest extends TypedReact.Component<FactoryProps, FactoryState> {
    render() {
        return React.DOM.h1(null, "Greetings", name);
    }
}

describe("createFactory", () => {
    var factory: React.Factory<FactoryProps>;
    var descriptor: React.Descriptor<FactoryProps>;
    var name = "jest";

    beforeEach(() => {
        factory = TypedReact.createFactory(FactoryTest);
        descriptor = factory({
            name: name
        });
    });

    it("should be a factory", () => {
        expect(React.isValidClass(factory)).to.be.true;
    });

    it("should produce a valid descriptor", () => {
        expect(React.isValidComponent(descriptor)).to.be.true;
        expect(descriptor.props.name).to.equal(name);
    });
});
