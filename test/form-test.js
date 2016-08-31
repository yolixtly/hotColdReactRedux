var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var Provider = require('react-redux').Provider;
var store = require('../dev/js/store.js');
var Form = require('../dev/js/form.js');

describe('Form Component', function() {
    it('It should render a Form',  function() {
        var renderer = TestUtils.createRenderer();
        renderer.render(<Provider store={store}><Form /></Provider>);
        var result = renderer.getRenderOutput();
        console.log(result);
        // result.type.should.equal('div');
        // result.props.children.props.type.should.equal('button');
        // result.props.children.props.value.should.equal('New Game') 
    });
});