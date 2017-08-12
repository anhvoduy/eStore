react js + webpack + ES 2016

npm install
yarn install

React's component life cycle
- componentWillMount(): immediately before initial rendering
- componentDidMount(): immediately after initial rendering
- componentWillReceiveProps(): when component receive new props
- shouldComponentUpdate(): before rendering, after receiving new props or states
  can return false to prevent rendering
- componentWillUpdate(): before rendering, after receiving new props or states
- componentDidUpdate(): after component is updated and is flushed to DOM
- componentUnMount(): immediately before removing component from DOM