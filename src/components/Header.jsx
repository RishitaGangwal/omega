import React, { useState } from "react";
import { Dropdown, Menu, Input, Button, Row, Col, Drawer } from "antd";
import { ChevronDown } from "lucide-react";
import { FaRegFaceSmile } from "react-icons/fa6";

const { Search: AntdSearch } = Input;

const Header = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [drawerVisible, setDrawerVisible] = useState(false);

  const cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setDropdownOpen(false);
  };

  const cityMenu = (
    <Menu>
      {cities.map((city) => (
        <Menu.Item key={city} onClick={() => handleCitySelect(city)}>
          {city}
        </Menu.Item>
      ))}
    </Menu>
  );

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <header className="border-b bg-white ">
      <div className="max-w-7xl mx-auto px-4 py-4 text-[#2F044E]">
        <Row align="middle" justify="space-between" gutter={[16, 16]}>
          <Col xs={8} sm={10} md={6}>
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#2F044E] font-poppins">
                CarSeller
              </span>
            </a>
          </Col>

          <Col
            xs={10}
            sm={10}
            md={10}
            className="flex items-center justify-between space-x-4"
          >
            <Dropdown
              overlay={cityMenu}
              trigger={["click"]}
              visible={dropdownOpen}
              onVisibleChange={(visible) => setDropdownOpen(visible)}
            >
              <Button
                className="flex items-center gap-2 text-gray-700 rounded-full py-2 px-4" 
              >
                {selectedCity} <ChevronDown className="h-4 w-4 " />
              </Button>
            </Dropdown>
            <AntdSearch
              placeholder="Search by Model"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-full w-full hidden sm:hidden md:block" 
            />
          </Col>

          <Col
            xs={6}
            sm={4}
            md={6}
            className="flex items-center justify-end gap-4"
          >
            <Button
              className="sm:hidden bg-[#2F044E]"
              type="primary"
              icon={<ChevronDown />}
              onClick={showDrawer}
            />

            <div className="hidden sm:flex gap-4">
              <Button
                className="font-medium transition hover:bg-gray-100"
                style={{ color: "#462162" }}
              >
                Buy car
              </Button>
              <Button className="font-medium transition hover:bg-gray-100">
                Sell car
              </Button>
              <Button className="font-medium transition hover:bg-gray-100">
                More
              </Button>
            </div>

            <div className="hidden sm:flex flex-col items-center space-y-1">
              <FaRegFaceSmile className="h-5 w-5" />
              <span className="text-sm">Account</span>
            </div>
          </Col>
        </Row>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
        width={250}
      >
        <AntdSearch
          placeholder="Search by Model"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-full mb-2 w-full " 
        />
        <Button block onClick={closeDrawer} style={{ marginBottom: "10px" }}>
          Buy Car
        </Button>
        <Button block onClick={closeDrawer} style={{ marginBottom: "10px" }}>
          Sell Car
        </Button>
        <Button block onClick={closeDrawer} style={{ marginBottom: "10px" }}>
          More
        </Button>
        <Button block onClick={closeDrawer} style={{ marginBottom: "10px" }}>
          Account
        </Button>
      </Drawer>
    </header>
  );
};

export default Header;
