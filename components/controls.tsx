"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Controls() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4">
      <div>
        <label
          htmlFor="client-select"
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          Client
        </label>
        <Select defaultValue="general-mills">
          <SelectTrigger
            id="client-select"
            className="w-full bg-zinc-800 border-grey-700"
          >
            <SelectValue placeholder="Select client" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general-mills">General Mills</SelectItem>
            <SelectItem value="other-client">Other Client</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label
          htmlFor="company-select"
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          Company
        </label>
        <Select defaultValue="betty-crocker">
          <SelectTrigger
            id="company-select"
            className="w-full bg-zinc-800 border-grey-700"
          >
            <SelectValue placeholder="Select company" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="betty-crocker">Betty Crocker</SelectItem>
            <SelectItem value="other-company">Other Company</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label
          htmlFor="website-select"
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          Website
        </label>
        <Select defaultValue="betty-crocker-uk">
          <SelectTrigger
            id="website-select"
            className="w-full bg-zinc-800 border-grey-700"
          >
            <SelectValue placeholder="Select website" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="betty-crocker-uk">Betty Crocker UK</SelectItem>
            <SelectItem value="other-website">Other Website</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label
          htmlFor="segment-select"
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          Segment
        </label>
        <Select defaultValue="full-site">
          <SelectTrigger
            id="segment-select"
            className="w-full bg-zinc-800 border-grey-700"
          >
            <SelectValue placeholder="Select segment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full-site">Full site</SelectItem>
            <SelectItem value="other-segment">Other Segment</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
