# Design Principles

Web whiteboard screencasting(both live and playback mode) with background slides, can be used as a graphics tablet for online tutoring or remote collaboration.

# 事件系统

仅在 WhiteBoard 与 WhitePage 级别提供了事件的响应，而在 Drawboard 与 Marker 级别提供了事件的触发。

事件类型分为 Snapshot（snap）与 Key Actions（ka）两种。

# Todos

- [ ] 结构化事件信息，添加绝对时间戳以适应重放的需求；将 WhitePage 中的事件响应统一提取到 Whiteboard 中。
- [ ] 引入全量的状态订正，每 5 秒订正一次
- [ ] 将白板划分为 Master
- [ ] 添加 Whiteboard 的 Loading 界面
- [ ] 添加全屏的绘制功能