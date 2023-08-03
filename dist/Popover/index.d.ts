import React, { FC } from "react";
import './Popover.module.less';
import { PopoverProps } from "./interface";
declare const Popover: FC<PopoverProps>;
export declare function getOverlay(title?: PopoverProps['title'], content?: PopoverProps['content']): React.JSX.Element | undefined;
export default Popover;
