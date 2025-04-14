"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { PlusCircle, Save, Trash2 } from "lucide-react";
import { useState } from "react";

// Grade level interface
interface GradeLevel {
  id: string;
  letter: string;
  minScore: number;
  maxScore: number;
  gpa: number;
  description: string;
}

export default function GradeLevelsSettings() {
  const { toast } = useToast();
  const [gradeLevels, setGradeLevels] = useState<GradeLevel[]>([
    {
      id: "GL001",
      letter: "A+",
      minScore: 95,
      maxScore: 100,
      gpa: 4.0,
      description: "Exceptional",
    },
    {
      id: "GL002",
      letter: "A",
      minScore: 90,
      maxScore: 94.99,
      gpa: 4.0,
      description: "Excellent",
    },
    {
      id: "GL003",
      letter: "A-",
      minScore: 85,
      maxScore: 89.99,
      gpa: 3.7,
      description: "Very Good",
    },
    {
      id: "GL004",
      letter: "B+",
      minScore: 80,
      maxScore: 84.99,
      gpa: 3.3,
      description: "Good",
    },
    {
      id: "GL005",
      letter: "B",
      minScore: 75,
      maxScore: 79.99,
      gpa: 3.0,
      description: "Above Average",
    },
    {
      id: "GL006",
      letter: "B-",
      minScore: 70,
      maxScore: 74.99,
      gpa: 2.7,
      description: "Average",
    },
    {
      id: "GL007",
      letter: "C+",
      minScore: 65,
      maxScore: 69.99,
      gpa: 2.3,
      description: "Below Average",
    },
    {
      id: "GL008",
      letter: "C",
      minScore: 60,
      maxScore: 64.99,
      gpa: 2.0,
      description: "Satisfactory",
    },
    {
      id: "GL009",
      letter: "C-",
      minScore: 55,
      maxScore: 59.99,
      gpa: 1.7,
      description: "Passing",
    },
    {
      id: "GL010",
      letter: "D",
      minScore: 50,
      maxScore: 54.99,
      gpa: 1.0,
      description: "Poor",
    },
    {
      id: "GL011",
      letter: "F",
      minScore: 0,
      maxScore: 49.99,
      gpa: 0.0,
      description: "Failing",
    },
  ]);

  const [newGradeLevel, setNewGradeLevel] = useState<Omit<GradeLevel, "id">>({
    letter: "",
    minScore: 0,
    maxScore: 0,
    gpa: 0,
    description: "",
  });

  // Handle input change for new grade level
  const handleNewGradeLevelChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setNewGradeLevel({
      ...newGradeLevel,
      [name]:
        name === "letter" || name === "description"
          ? value
          : Number.parseFloat(value),
    });
  };

  // Handle adding a new grade level
  const handleAddGradeLevel = () => {
    // Validate inputs
    if (
      !newGradeLevel.letter ||
      newGradeLevel.minScore < 0 ||
      newGradeLevel.maxScore <= newGradeLevel.minScore
    ) {
      toast({
        title: "Invalid input",
        description: "Please check your inputs and try again.",
        variant: "destructive",
      });
      return;
    }

    // Check for overlapping ranges
    const overlapping = gradeLevels.some(
      (level) =>
        (newGradeLevel.minScore >= level.minScore &&
          newGradeLevel.minScore <= level.maxScore) ||
        (newGradeLevel.maxScore >= level.minScore &&
          newGradeLevel.maxScore <= level.maxScore) ||
        (newGradeLevel.minScore <= level.minScore &&
          newGradeLevel.maxScore >= level.maxScore)
    );

    if (overlapping) {
      toast({
        title: "Overlapping range",
        description: "The score range overlaps with an existing grade level.",
        variant: "destructive",
      });
      return;
    }

    const newId = `GL${String(gradeLevels.length + 1).padStart(3, "0")}`;
    setGradeLevels([...gradeLevels, { ...newGradeLevel, id: newId }]);
    setNewGradeLevel({
      letter: "",
      minScore: 0,
      maxScore: 0,
      gpa: 0,
      description: "",
    });
    toast({
      title: "Grade level added",
      description: `Grade level ${newGradeLevel.letter} has been added.`,
    });
  };

  // Handle deleting a grade level
  const handleDeleteGradeLevel = (id: string) => {
    setGradeLevels(gradeLevels.filter((level) => level.id !== id));
    toast({
      title: "Grade level deleted",
      description: "The grade level has been removed.",
      variant: "destructive",
    });
  };

  // Handle updating grade levels
  const handleUpdateGradeLevels = () => {
    // Sort grade levels by max score (descending)
    const sortedLevels = [...gradeLevels].sort(
      (a, b) => b.maxScore - a.maxScore
    );
    setGradeLevels(sortedLevels);
    toast({
      title: "Grade levels updated",
      description: "Grade levels have been updated and sorted.",
    });
  };

  // Handle input change for existing grade level
  const handleGradeLevelChange = (
    id: string,
    field: keyof GradeLevel,
    value: string | number
  ) => {
    setGradeLevels(
      gradeLevels.map((level) =>
        level.id === id
          ? {
              ...level,
              [field]: typeof value === "string" ? value : value,
            }
          : level
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Grade Levels</h2>
          <p className="text-muted-foreground">
            Define grade levels and their corresponding score ranges
          </p>
        </div>
        <Button onClick={handleUpdateGradeLevels}>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Grade Level Definitions</CardTitle>
          <CardDescription>
            Define the letter grades, score ranges, GPA values, and descriptions
            for your grading system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Letter Grade</TableHead>
                <TableHead>Min Score</TableHead>
                <TableHead>Max Score</TableHead>
                <TableHead>GPA</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gradeLevels.map((level) => (
                <TableRow key={level.id}>
                  <TableCell>
                    <Input
                      value={level.letter}
                      onChange={(e) =>
                        handleGradeLevelChange(
                          level.id,
                          "letter",
                          e.target.value
                        )
                      }
                      className="w-20"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={level.minScore}
                      onChange={(e) =>
                        handleGradeLevelChange(
                          level.id,
                          "minScore",
                          e.target.value
                        )
                      }
                      className="w-24"
                      step="0.01"
                      min="0"
                      max="100"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={level.maxScore}
                      onChange={(e) =>
                        handleGradeLevelChange(
                          level.id,
                          "maxScore",
                          e.target.value
                        )
                      }
                      className="w-24"
                      step="0.01"
                      min="0"
                      max="100"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={level.gpa}
                      onChange={(e) =>
                        handleGradeLevelChange(level.id, "gpa", e.target.value)
                      }
                      className="w-20"
                      step="0.1"
                      min="0"
                      max="4"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={level.description}
                      onChange={(e) =>
                        handleGradeLevelChange(
                          level.id,
                          "description",
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteGradeLevel(level.id)}
                      className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Add New Grade Level</CardTitle>
          <CardDescription>
            Define a new grade level for your grading system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-6 gap-4">
            <div className="space-y-2">
              <Label htmlFor="letter">Letter Grade</Label>
              <Input
                id="letter"
                name="letter"
                value={newGradeLevel.letter}
                onChange={handleNewGradeLevelChange}
                placeholder="e.g., A+"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="minScore">Min Score</Label>
              <Input
                id="minScore"
                name="minScore"
                type="number"
                value={newGradeLevel.minScore}
                onChange={handleNewGradeLevelChange}
                placeholder="e.g., 90"
                step="0.01"
                min="0"
                max="100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxScore">Max Score</Label>
              <Input
                id="maxScore"
                name="maxScore"
                type="number"
                value={newGradeLevel.maxScore}
                onChange={handleNewGradeLevelChange}
                placeholder="e.g., 100"
                step="0.01"
                min="0"
                max="100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gpa">GPA</Label>
              <Input
                id="gpa"
                name="gpa"
                type="number"
                value={newGradeLevel.gpa}
                onChange={handleNewGradeLevelChange}
                placeholder="e.g., 4.0"
                step="0.1"
                min="0"
                max="4"
              />
            </div>
            <div className="space-y-2 col-span-2">
              <Label htmlFor="description">Description</Label>
              <div className="flex gap-2">
                <Input
                  id="description"
                  name="description"
                  value={newGradeLevel.description}
                  onChange={handleNewGradeLevelChange}
                  placeholder="e.g., Excellent"
                />
                <Button onClick={handleAddGradeLevel}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Grade Level Visualization</CardTitle>
          <CardDescription>
            Visual representation of your grading scale
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full relative">
            <div className="absolute inset-0 flex items-center">
              <div className="h-1 w-full bg-gray-200 rounded-full"></div>
            </div>
            {gradeLevels.map((level) => (
              <div
                key={level.id}
                className="absolute top-0 flex flex-col items-center"
                style={{
                  left: `${level.minScore}%`,
                  width: `${level.maxScore - level.minScore}%`,
                }}
              >
                <div className="h-8 w-full bg-primary/20 rounded-md flex items-center justify-center">
                  <span className="text-xs font-medium">{level.letter}</span>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  {level.minScore} - {level.maxScore}
                </div>
                <div className="mt-1 text-xs">GPA: {level.gpa.toFixed(1)}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
