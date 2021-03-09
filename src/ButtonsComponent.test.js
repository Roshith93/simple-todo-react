import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ButtonsComponent from "./ButtonsComponent";
import MyButton from "./MyButton";

Enzyme.configure({ adapter: new Adapter() });

describe("ButtonsComponent", () => {
  it("renders three <MyButton /> components", () => {
    const wrapper = shallow(<ButtonsComponent />);
    expect(wrapper.find(MyButton)).toHaveLength(3);
  });

  it("calls the proper handler onClick", () => {
    const spy = jest.fn();
    const wrapper = shallow(<ButtonsComponent updateState={spy} />);
    wrapper
      .find(MyButton)
      .at(0)
      .simulate("click", { target: { value: "Whatever" } });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("Whatever");
  });
});
