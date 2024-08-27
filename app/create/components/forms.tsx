"use client";

import { createMonster } from "@/app/api";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MonsterSchema, type Monster } from "@/schema/monster";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

export const Forms = () => {
  const forms = useForm<Monster>({
    resolver: zodResolver(MonsterSchema),
    defaultValues: {
      name: "",
      type: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      favorite: false,
      image: "",
      specialAttack: 0,
      specialDeffense: 0,
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof MonsterSchema>) => {
    console.log("onSubmit", values);
    const created = await createMonster(values);
  };

  const onInvalid = () => {
    console.log("onInvalid", forms.formState.errors);
  };

  return (
    <div>
      <Form {...forms}>
        <form
          onSubmit={forms.handleSubmit(onSubmit, onInvalid)}
          className="space-y-8"
        >
          <FormField
            control={forms.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monster Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormDescription>The name of the monster.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">送信</Button>
        </form>
      </Form>
    </div>
  );
};
