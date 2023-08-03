import React, { FC, memo } from 'react';
import './loading.module.less';
interface LoadingProps {
  //自定义container接口
  /**
   * @description 容器主题
   * @default primary
   */
  type?: String;
  /**
   * @description 遮盖层样式
   *
   */
  mask?: String;
  /**
   * @description 加载文案
   */
  text?: String;
  /**
   * @description 子节点
   */
  children?: any;
  /**
   * @description 控制显示隐藏
   *
   */
  loading?: Boolean;
  /**
   * @description 控制整页加载
   *
   */
  all?: Boolean;
  /**
   * @description 点击事件
   *
   */
  handleClick?: Function | undefined;
  /**
   * @description 定义的类名
   */
  className?: string;
    /**
   * @description 点击事件
   *
   */
  handleClickTwo?: Function | undefined;
 
}
type NativeLoadingProps = Omit<React.HTMLAttributes<HTMLElement>, 'type'>;
const Loading: FC<LoadingProps & NativeLoadingProps> = memo((props) => {
  const { text, children, mask, loading, all, type, className } = props;
  const styleProps = [className].join('');
  return (
    // 返回两个容器外层以及内层的loading
    <div className={styleProps}>
      <div>{children ? children[0] : <div className="icon"></div>}</div>
    </div>
  );
});
export default Loading;
