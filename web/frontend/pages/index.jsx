import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";


import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

import React, { useState } from 'react';

import { Button } from '@shopify/polaris';

import { Switch } from '@material-ui/core';

export default function HomePage() {
    const [toggleState, setToggleState] = useState(false);

    const handleToggleChange = (event) => {
        setToggleState(event.target.checked);
    };

    const [settings, setSettings] = useState({
        // your default settings values
      });

      const handleInputChange = (field, value) => {
        setSettings(prev => ({
          ...prev,
          [field]: value,
        }));
      };

      const saveSettings = async () => {
        const response = await fetch('/admin/api/2021-07/shop.json', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            shop: {
              id: 123456789,
              settings,
            },
          }),
        });

        if (!response.ok) {
          console.error(response.statusText);
        }
      };


  return (
    <Page narrowWidth>
      <TitleBar title="App name" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading>Nice work on building a Shopify app 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉</Heading>
                  <p>
                    Your app is ready to explore! It contains everything you
                    need to get started including the{" "}
                    <Link url="https://polaris.shopify.com/" external>
                      Polaris design system
                    </Link>
                    ,{" "}
                    <Link url="https://shopify.dev/api/admin-graphql" external>
                      Shopify Admin API
                    </Link>
                    , and{" "}
                    <Link
                      url="https://shopify.dev/apps/tools/app-bridge"
                      external
                    >
                      App Bridge
                    </Link>{" "}
                    UI library and components.
                  </p>
                  <p>
                    Ready to go? Start populating your app with some sample
                    products to view and test in your store.{" "}
                  </p>
                  <p>
                    Learn more about building out your app in{" "}
                    <Link
                      url="https://shopify.dev/apps/getting-started/add-functionality"
                      external
                    >
                      this Shopify tutorial
                    </Link>{" "}
                    📚{" "}
                  </p>
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={trophyImage}
                    alt="Nice work on building a Shopify app"
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section>
        <Switch
            checked={toggleState}
            onChange={handleToggleChange}
        />
        <Button onClick={saveSettings}>Save</Button>

        </Layout.Section>
      </Layout>
    </Page>
  );
}
