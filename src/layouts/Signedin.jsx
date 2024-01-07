import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";
export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://i.scdn.co/image/ab67616d0000b2739889c7f37d195d45c71713a4"
        />
        <Dropdown pointing="top right" text="Kadir Özdemir">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item
              onClick={signOut}
              text="Cikis Yap"
              icon="sign-out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
