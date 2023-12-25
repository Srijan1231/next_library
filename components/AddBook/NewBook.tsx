"use client";
import React, { useState } from "react";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/app/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import Image from "next/image";
import axios from "axios";

const NewBook = () => {
  const [content, setContent] = useState<any>({});
  const [files, setFiles] = useState<File[]>([]);
  const [date, setDate] = useState<Date>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setContent({
      ...content,
      [name]: value,
    });
  };
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const arrayFiles = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...arrayFiles]);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      title: content.title,
      description: content.description,
      media: files,
      category: content.category,
      author: content.author,
      publishedIn: date?.toISOString(),
    };
    axios.post("/api/book", data);
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-lg font-semibold text-center mb-4">Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="mx-auto max-w-xs">
            <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-300">
              <div className="space-y-1 text-center">
                <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </div>
                <div className="text-gray-600">
                  Click to upload or drag and drop
                </div>
                <p className="text-sm text-gray-500">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
              <input
                type="file"
                name="media"
                className="sr-only"
                accept="image/jpg, image/jpeg, image/png, image/webp, image/gif, video/mp4, video/webm "
                onChange={handleFile}
                multiple
              />
            </label>
          </div>

          {files && (
            <div className="flex gap-4 items-center">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden w-32 h-32 relative"
                >
                  {file.type.startsWith("image/") && (
                    <Image
                      className="object-cover"
                      src={URL.createObjectURL(file)}
                      alt="files"
                      fill={true}
                    />
                  )}
                  {file.type.startsWith("video/") && (
                    <video
                      className="object-cover"
                      src={URL.createObjectURL(file)}
                      autoPlay
                      loop
                      muted
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col  m-1">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="border rounded-md "
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Description</label>
            <textarea
              className="border rounded-md"
              name="description"
              onChange={handleChange}
            >
              Write a description about Books
            </textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label>Category</label>
            <input
              className="border rounded-md"
              onChange={handleChange}
              name="category"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Author</label>
            <input
              className="border rounded-md"
              onChange={handleChange}
              name="author"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Published In</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    "text-muted-foreground"
                  )}
                >
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <Button type="submit" className="w-full mt-2">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewBook;
