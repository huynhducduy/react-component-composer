import * as React from 'react';
import * as renderer from 'react-test-renderer';

import composeComponents from '../src';
import TestComponent from './TestComponent';

it('compose 0 component without crashing', () => {
  const Components = composeComponents();

  const tree = renderer.create(<Components>Test</Components>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('compose 1 component without crashing', () => {
  const Components = composeComponents(TestComponent);

  const tree = renderer.create(<Components>Test</Components>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('compose 3 component without crashing', () => {
  const Components = composeComponents(
    TestComponent,
    [TestComponent],
    TestComponent
  );

  const tree = renderer.create(<Components>Test</Components>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('compose html tag component without crashing', () => {
  const Components = composeComponents('div');

  const tree = renderer.create(<Components>Test</Components>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('compose component with props and without crashing', () => {
  const Components = composeComponents(['div', {className: 'testClass'}]);

  const tree = renderer.create(<Components>Test</Components>).toJSON();

  expect(tree).toMatchSnapshot();
});
