import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList className="sticky top-10">
          <TabsTrigger className="focus:bg-green-500" value="account">Account</TabsTrigger>
          <TabsTrigger className="focus:bg-green-500" value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re
                done. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio facere, officiis nihil corrupti sint enim quas ad nisi asperiores, quibusdam aperiam eos esse? Necessitatibus, ipsam obcaecati. 
                Consequuntur placeat mollitia porro doloribus ut aperiam magnam animi. Cumque sunt rem eos vel placeat hic nobis accusantium eum modi, officiis culpa totam deleniti soluta, et error alias ab voluptatem illum est unde ipsam consectetur beatae? Neque optio beatae atque, reiciendis placeat libero laboriosam magnam nemo. Id accusantium neque ab dignissimos voluptate beatae dolore, repellendus nihil magni delectus quia obcaecati aut, eveniet nisi minus. Possimus aperiam quo aut totam, eum quas repudiandae corporis distinctio impedit odio est recusandae minima accusamus fugit itaque ea dolore quidem, debitis quod, exercitationem delectus? Expedita possimus iste laborum? Quia itaque illo, accusamus odit, nam ex excepturi molestiae nemo laborum mollitia autem laboriosam eos expedita atque ab dolores alias cupiditate ullam. Ducimus provident architecto neque in obcaecati minus ea voluptate non perspiciatis saepe tempore quibusdam facilis repellendus minima quasi maiores vel sit soluta voluptatum quisquam eius, aspernatur quia molestias! Fugit maiores fuga dicta quibusdam iure, optio obcaecati quidem ipsa nemo dolorum, unde tempora assumenda omnis, necessitatibus quia maxime sapiente delectus nam labore? Nostrum hic esse iste perspiciatis temporibus repellendus nam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio facere, officiis nihil corrupti sint enim quas ad nisi asperiores, quibusdam aperiam eos esse? Necessitatibus, ipsam obcaecati. Consequuntur placeat mollitia porro doloribus ut aperiam magnam animi. Cumque sunt rem eos vel placeat hic nobis accusantium eum modi, officiis culpa totam deleniti soluta, et error alias ab voluptatem illum est unde ipsam consectetur beatae? Neque optio beatae atque, reiciendis placeat libero laboriosam magnam nemo. Id accusantium neque ab dignissimos voluptate beatae dolore, repellendus nihil magni delectus quia obcaecati aut, eveniet nisi minus. Possimus aperiam quo aut totam, eum quas repudiandae corporis distinctio impedit odio est recusandae minima accusamus fugit itaque ea dolore quidem, debitis quod, exercitationem delectus? Expedita possimus iste laborum? Quia itaque illo, accusamus odit, nam ex excepturi molestiae nemo laborum mollitia autem laboriosam eos expedita atque ab dolores alias cupiditate ullam. Ducimus provident architecto neque in obcaecati minus ea voluptate non perspiciatis saepe tempore quibusdam facilis repellendus minima quasi maiores vel sit soluta voluptatum quisquam eius, aspernatur quia molestias! Fugit maiores fuga dicta quibusdam iure, optio obcaecati quidem ipsa nemo dolorum, unde tempora assumenda omnis, necessitatibus quia maxime sapiente delectus nam labore? Nostrum hic esse iste perspiciatis temporibus repellendus nam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio facere, officiis nihil corrupti sint enim quas ad nisi asperiores, quibusdam aperiam eos esse? Necessitatibus, ipsam obcaecati. Consequuntur placeat mollitia porro doloribus ut aperiam magnam animi. Cumque sunt rem eos vel placeat hic nobis accusantium eum modi, officiis culpa totam deleniti soluta, et error alias ab voluptatem illum est unde ipsam consectetur beatae? Neque optio beatae atque, reiciendis placeat libero laboriosam magnam nemo. Id accusantium neque ab dignissimos voluptate beatae dolore, repellendus nihil magni delectus quia obcaecati aut, eveniet nisi minus. Possimus aperiam quo aut totam, eum quas repudiandae corporis distinctio impedit odio est recusandae minima accusamus fugit itaque ea dolore quidem, debitis quod, exercitationem delectus? Expedita possimus iste laborum? Quia itaque illo, accusamus odit, nam ex excepturi molestiae nemo laborum mollitia autem laboriosam eos expedita atque ab dolores alias cupiditate ullam. Ducimus provident architecto neque in obcaecati minus ea voluptate non perspiciatis saepe tempore quibusdam facilis repellendus minima quasi maiores vel sit soluta voluptatum quisquam eius, aspernatur quia molestias! Fugit maiores fuga dicta quibusdam iure, optio obcaecati quidem ipsa nemo dolorum, unde tempora assumenda omnis, necessitatibus quia maxime sapiente delectus nam labore? Nostrum hic esse iste perspiciatis temporibus repellendus nam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio facere, officiis nihil corrupti sint enim quas ad nisi asperiores, quibusdam aperiam eos esse? Necessitatibus, ipsam obcaecati. Consequuntur placeat mollitia porro doloribus ut aperiam magnam animi. Cumque sunt rem eos vel placeat hic nobis accusantium eum modi, officiis culpa totam deleniti soluta, et error alias ab voluptatem illum est unde ipsam consectetur beatae? Neque optio beatae atque, reiciendis placeat libero laboriosam magnam nemo. Id accusantium neque ab dignissimos voluptate beatae dolore, repellendus nihil magni delectus quia obcaecati aut, eveniet nisi minus. Possimus aperiam quo aut totam, eum quas repudiandae corporis distinctio impedit odio est recusandae minima accusamus fugit itaque ea dolore quidem, debitis quod, exercitationem delectus? Expedita possimus iste laborum? Quia itaque illo, accusamus odit, nam ex excepturi molestiae nemo laborum mollitia autem laboriosam eos expedita atque ab dolores alias cupiditate ullam. Ducimus provident architecto neque in obcaecati minus ea voluptate non perspiciatis saepe tempore quibusdam facilis repellendus minima quasi maiores vel sit soluta voluptatum quisquam eius, aspernatur quia molestias! Fugit maiores fuga dicta quibusdam iure, optio obcaecati quidem ipsa nemo dolorum, unde tempora assumenda omnis, necessitatibus quia maxime sapiente delectus nam labore? Nostrum hic esse iste perspiciatis temporibus repellendus nam.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Username</Label>
                <Input id="tabs-demo-username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio facere, officiis nihil corrupti sint enim quas ad nisi asperiores, quibusdam aperiam eos esse? Necessitatibus, ipsam obcaecati. Consequuntur placeat mollitia porro doloribus ut aperiam magnam animi. Cumque sunt rem eos vel placeat hic nobis accusantium eum modi, officiis culpa totam deleniti soluta, et error alias ab voluptatem illum est unde ipsam consectetur beatae? Neque optio beatae atque, reiciendis placeat libero laboriosam magnam nemo. Id accusantium neque ab dignissimos voluptate beatae dolore, repellendus nihil magni delectus quia obcaecati aut, eveniet nisi minus. Possimus aperiam quo aut totam, eum quas repudiandae corporis distinctio impedit odio est recusandae minima accusamus fugit itaque ea dolore quidem, debitis quod, exercitationem delectus? Expedita possimus iste laborum? Quia itaque illo, accusamus odit, nam ex excepturi molestiae nemo laborum mollitia autem laboriosam eos expedita atque ab dolores alias cupiditate ullam. Ducimus provident architecto neque in obcaecati minus ea voluptate non perspiciatis saepe tempore quibusdam facilis repellendus minima quasi maiores vel sit soluta voluptatum quisquam eius, aspernatur quia molestias! Fugit maiores fuga dicta quibusdam iure, optio obcaecati quidem ipsa nemo dolorum, unde tempora assumenda omnis, necessitatibus quia maxime sapiente delectus nam labore? Nostrum hic esse iste perspiciatis temporibus repellendus nam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio facere, officiis nihil corrupti sint enim quas ad nisi asperiores, quibusdam aperiam eos esse? Necessitatibus, ipsam obcaecati. Consequuntur placeat mollitia porro doloribus ut aperiam magnam animi. Cumque sunt rem eos vel placeat hic nobis accusantium eum modi, officiis culpa totam deleniti soluta, et error alias ab voluptatem illum est unde ipsam consectetur beatae? Neque optio beatae atque, reiciendis placeat libero laboriosam magnam nemo. Id accusantium neque ab dignissimos voluptate beatae dolore, repellendus nihil magni delectus quia obcaecati aut, eveniet nisi minus. Possimus aperiam quo aut totam, eum quas repudiandae corporis distinctio impedit odio est recusandae minima accusamus fugit itaque ea dolore quidem, debitis quod, exercitationem delectus? Expedita possimus iste laborum? Quia itaque illo, accusamus odit, nam ex excepturi molestiae nemo laborum mollitia autem laboriosam eos expedita atque ab dolores alias cupiditate ullam. Ducimus provident architecto neque in obcaecati minus ea voluptate non perspiciatis saepe tempore quibusdam facilis repellendus minima quasi maiores vel sit soluta voluptatum quisquam eius, aspernatur quia molestias! Fugit maiores fuga dicta quibusdam iure, optio obcaecati quidem ipsa nemo dolorum, unde tempora assumenda omnis, necessitatibus quia maxime sapiente delectus nam labore? Nostrum hic esse iste perspiciatis temporibus repellendus nam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio facere, officiis nihil corrupti sint enim quas ad nisi asperiores, quibusdam aperiam eos esse? Necessitatibus, ipsam obcaecati. Consequuntur placeat mollitia porro doloribus ut aperiam magnam animi. Cumque sunt rem eos vel placeat hic nobis accusantium eum modi, officiis culpa totam deleniti soluta, et error alias ab voluptatem illum est unde ipsam consectetur beatae? Neque optio beatae atque, reiciendis placeat libero laboriosam magnam nemo. Id accusantium neque ab dignissimos voluptate beatae dolore, repellendus nihil magni delectus quia obcaecati aut, eveniet nisi minus. Possimus aperiam quo aut totam, eum quas repudiandae corporis distinctio impedit odio est recusandae minima accusamus fugit itaque ea dolore quidem, debitis quod, exercitationem delectus? Expedita possimus iste laborum? Quia itaque illo, accusamus odit, nam ex excepturi molestiae nemo laborum mollitia autem laboriosam eos expedita atque ab dolores alias cupiditate ullam. Ducimus provident architecto neque in obcaecati minus ea voluptate non perspiciatis saepe tempore quibusdam facilis repellendus minima quasi maiores vel sit soluta voluptatum quisquam eius, aspernatur quia molestias! Fugit maiores fuga dicta quibusdam iure, optio obcaecati quidem ipsa nemo dolorum, unde tempora assumenda omnis, necessitatibus quia maxime sapiente delectus nam labore? Nostrum hic esse iste perspiciatis temporibus repellendus nam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio facere, officiis nihil corrupti sint enim quas ad nisi asperiores, quibusdam aperiam eos esse? Necessitatibus, ipsam obcaecati. Consequuntur placeat mollitia porro doloribus ut aperiam magnam animi. Cumque sunt rem eos vel placeat hic nobis accusantium eum modi, officiis culpa totam deleniti soluta, et error alias ab voluptatem illum est unde ipsam consectetur beatae? Neque optio beatae atque, reiciendis placeat libero laboriosam magnam nemo. Id accusantium neque ab dignissimos voluptate beatae dolore, repellendus nihil magni delectus quia obcaecati aut, eveniet nisi minus. Possimus aperiam quo aut totam, eum quas repudiandae corporis distinctio impedit odio est recusandae minima accusamus fugit itaque ea dolore quidem, debitis quod, exercitationem delectus? Expedita possimus iste laborum? Quia itaque illo, accusamus odit, nam ex excepturi molestiae nemo laborum mollitia autem laboriosam eos expedita atque ab dolores alias cupiditate ullam. Ducimus provident architecto neque in obcaecati minus ea voluptate non perspiciatis saepe tempore quibusdam facilis repellendus minima quasi maiores vel sit soluta voluptatum quisquam eius, aspernatur quia molestias! Fugit maiores fuga dicta quibusdam iure, optio obcaecati quidem ipsa nemo dolorum, unde tempora assumenda omnis, necessitatibus quia maxime sapiente delectus nam labore? Nostrum hic esse iste perspiciatis temporibus repellendus nam.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
