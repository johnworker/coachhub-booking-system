import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { console.error(error, info); }
  render() {
    if (this.state.hasError) {
      return <div className="p-6 text-red-600">發生錯誤，請稍後再試。</div>;
    }
    return this.props.children;
  }
}
