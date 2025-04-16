"use client";

import React, { useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Controls = React.memo(function Controls() {
  // Memoize the select options
  const clientOptions = useMemo(() => [
    { value: "general-mills", label: "General Mills" },
    { value: "other-client", label: "Other Client" },
  ], []);

  const companyOptions = useMemo(() => [
    { value: "betty-crocker", label: "Betty Crocker" },
    { value: "other-company", label: "Other Company" },
  ], []);

  const websiteOptions = useMemo(() => [
    { value: "betty-crocker-uk", label: "Betty Crocker UK" },
    { value: "other-website", label: "Other Website" },
  ], []);

  const segmentOptions = useMemo(() => [
    { value: "full-site", label: "Full site" },
    { value: "other-segment", label: "Other Segment" },
  ], []);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4"
      role="group"
      aria-label="Dashboard Filters"
    >
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
            aria-label="Select client"
          >
            <SelectValue placeholder="Select client" />
          </SelectTrigger>
          <SelectContent>
            {clientOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                aria-label={option.label}
              >
                {option.label}
              </SelectItem>
            ))}
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
            aria-label="Select company"
          >
            <SelectValue placeholder="Select company" />
          </SelectTrigger>
          <SelectContent>
            {companyOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                aria-label={option.label}
              >
                {option.label}
              </SelectItem>
            ))}
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
            aria-label="Select website"
          >
            <SelectValue placeholder="Select website" />
          </SelectTrigger>
          <SelectContent>
            {websiteOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                aria-label={option.label}
              >
                {option.label}
              </SelectItem>
            ))}
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
            aria-label="Select segment"
          >
            <SelectValue placeholder="Select segment" />
          </SelectTrigger>
          <SelectContent>
            {segmentOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                aria-label={option.label}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
});

export default Controls;
