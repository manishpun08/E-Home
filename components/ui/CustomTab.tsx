import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function CustomTab() {
  return (
    <>
      {/* For Colors */}
      <Tabs defaultValue="color1" className="w-full">
        <TabsList className="flex w-full justify-start my-6 p-0">
          <TabsTrigger className="m-0 p-0" value="color1">
            <Button
              variant="secondary"
              className="text-d9d9 px-14 mr-8"
              style={{
                background:
                  "linear-gradient(90.73deg, rgba(233, 206, 110, 0.3) 1.69%, rgba(179, 135, 58, 0.3) 96.02%)",
              }}
            >
              Color 1
            </Button>
          </TabsTrigger>
          <TabsTrigger className="m-0 p-0" value="color2">
            <Button variant="secondary" className="text-d9d9 px-14 mr-8">
              Color 2
            </Button>
          </TabsTrigger>
          <TabsTrigger className="m-0 p-0" value="color3">
            <Button variant="secondary" className="text-d9d9 px-14 mr-8">
              Color 3
            </Button>
          </TabsTrigger>
          <TabsTrigger className="m-0 p-0" value="color4">
            <Button variant="secondary" className="text-d9d9 px-14 mr-8">
              Color 4
            </Button>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="color1">
          <Image
            src="/rug/rugproduct1.jpg"
            alt="Color 1"
            width={400}
            height={362.33}
            className="max-w-full h-auto"
            style={{ maxHeight: "362.33px" }}
          />
        </TabsContent>
        <TabsContent value="color2">
          <Image
            src="/rug/rugproduct2.jpg"
            alt="Color 2"
            width={400}
            height={362.33}
            className="max-w-full h-auto"
            style={{ maxHeight: "362.33px" }}
          />
        </TabsContent>
        <TabsContent value="color3">
          <Image
            src="/rug/rugproduct3.jpg"
            alt="Color 3"
            width={400}
            height={362.33}
            className="max-w-full h-auto"
            style={{ maxHeight: "362.33px" }}
          />
        </TabsContent>
        <TabsContent value="color4">
          <Image
            src="/rug/rugproduct4.jpg"
            alt="Color 4"
            width={400}
            height={362.33}
            className="max-w-full h-auto"
            style={{ maxHeight: "362.33px" }}
          />
        </TabsContent>
      </Tabs>

      {/* For Patterns */}
      <div className="my-16">
        <h3 className="text-light font-Cinzel font-normal text-xl">
          Choose your Patterns
        </h3>

        <Tabs defaultValue="pattern1" className="w-full">
          <TabsList className="flex w-full justify-start my-6 p-0">
            <TabsTrigger className="m-0 p-0" value="pattern1">
              <Button
                variant="secondary"
                className="text-d9d9 px-14 mr-8"
                style={{
                  background:
                    "linear-gradient(90.73deg, rgba(233, 206, 110, 0.3) 1.69%, rgba(179, 135, 58, 0.3) 96.02%)",
                }}
              >
                Pattern 1
              </Button>
            </TabsTrigger>
            <TabsTrigger className="m-0 p-0" value="pattern2">
              <Button variant="secondary" className="text-d9d9 px-14 mr-8">
                Pattern 2
              </Button>
            </TabsTrigger>
            <TabsTrigger className="m-0 p-0" value="pattern3">
              <Button variant="secondary" className="text-d9d9 px-14 mr-8">
                Pattern 3
              </Button>
            </TabsTrigger>
            <TabsTrigger className="m-0 p-0" value="pattern4">
              <Button variant="secondary" className="text-d9d9 px-14 mr-8">
                Pattern 4
              </Button>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pattern1">
            <Image
              src="/rug/rugproduct2.jpg"
              alt="Pattern 1"
              width={400}
              height={362.33}
              className="max-w-full h-auto"
              style={{ maxHeight: "362.33px" }}
            />
          </TabsContent>
          <TabsContent value="pattern2">
            <Image
              src="/rug/rugproduct2.jpg"
              alt="Pattern 2"
              width={400}
              height={362.33}
              className="max-w-full h-auto"
              style={{ maxHeight: "362.33px" }}
            />
          </TabsContent>
          <TabsContent value="pattern3">
            <Image
              src="/rug/rugproduct3.jpg"
              alt="Pattern 3"
              width={400}
              height={362.33}
              className="max-w-full h-auto"
              style={{ maxHeight: "362.33px" }}
            />
          </TabsContent>
          <TabsContent value="pattern4">
            <Image
              src="/rug/rugproduct4.jpg"
              alt="Pattern 4"
              width={400}
              height={362.33}
              className="max-w-full h-auto"
              style={{ maxHeight: "362.33px" }}
            />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
