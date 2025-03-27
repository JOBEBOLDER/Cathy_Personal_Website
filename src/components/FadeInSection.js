import React from "react";

export default function FadeInSection(props) {
  // 状态管理：控制元素是否可见
  const [isVisible, setVisible] = React.useState(false);
  
  // 创建一个引用，用于获取 DOM 元素
  const domRef = React.useRef();
  
  // 使用 useEffect 钩子实现监听元素是否进入视口
  React.useEffect(() => {
    // 创建 Intersection Observer 实例
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // 当元素进入视口时，设置 isVisible 为 true
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    
    // 开始观察目标 DOM 元素
    observer.observe(domRef.current);
    
    // 清理函数：组件卸载时停止观察
    return () => observer.unobserve(domRef.current);
  }, []); // 空依赖数组，仅在组件挂载时执行一次
  
  // 渲染组件
  return (
    <div
      // 动态类名：根据可见性添加 'is-visible' 类
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      // 使用 props 传入的延迟时间
      style={{ transitionDelay: `${props.delay}` }}
      // 绑定 DOM 引用
      ref={domRef}
    >
      {/* 渲染子组件 */}
      {props.children}
    </div>
  );
}