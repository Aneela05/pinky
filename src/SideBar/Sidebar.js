import React from "react";

class Sidebar extends React.Component {
  componentDidMount() {
    this.handleModule(Modules[0]);
  }
  handleModule = (module) => {
    const { change } = this.props;
    change(module);
  };
  render() {
    return (
      <div className="sidebar">
        {Modules.map((module) => (
          <div
            className="module"
            onClick={(e) => this.handleModule(e.target.outerText)}
          >
            {module}
          </div>
        ))}
      </div>
    );
  }
}

const Modules = ["Diary", "Personal Note", "Email", "Chats"];
export default Sidebar;
