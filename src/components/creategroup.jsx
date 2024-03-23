import * as React from "react"

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CreateGroup() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Group</CardTitle>
        <CardDescription>Make the group you want to race with</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Group Name</Label>
              <Input id="name" placeholder="Name for your racing group" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="members">Number of members in group</Label>
              <Select>
                <SelectTrigger id="Number of group members">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="two">2</SelectItem>
                  <SelectItem value="three">3</SelectItem>
                  <SelectItem value="four">4</SelectItem>
                  <SelectItem value="five">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Create Group</Button>
      </CardFooter>
    </Card>
  )
}
