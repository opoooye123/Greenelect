import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin, Zap, Droplets, Wind } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface ProjectCardProps {
  id: string
  title: string
  location: string
  image: string
  description: string
  fundingGoal: number
  fundingRaised: number
  energyType: "solar" | "wind" | "hydro" | "hybrid" | "water"
  returns: string
}

export function ProjectCard({
  id,
  title,
  location,
  image,
  description,
  fundingGoal,
  fundingRaised,
  energyType,
  returns,
}: ProjectCardProps) {
  const percentFunded = Math.round((fundingRaised / fundingGoal) * 100)

  const getEnergyIcon = (type: string) => {
    switch (type) {
      case "solar":
        return <Zap className="h-4 w-4" />
      case "wind":
        return <Wind className="h-4 w-4" />
      case "water":
        return <Droplets className="h-4 w-4" />
      default:
        return <Zap className="h-4 w-4" />
    }
  }

  const getEnergyColor = (type: string) => {
    switch (type) {
      case "solar":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "wind":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "water":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "hybrid":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      default:
        return "bg-green-100 text-green-800 hover:bg-green-200"
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge className={`${getEnergyColor(energyType)} flex items-center gap-1`}>
            {getEnergyIcon(energyType)}
            {energyType.charAt(0).toUpperCase() + energyType.slice(1)}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {location}
          </Badge>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Funding Progress</span>
            <span className="font-medium">{percentFunded}%</span>
          </div>
          <Progress value={percentFunded} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${fundingRaised.toLocaleString()}</span>
            <span>${fundingGoal.toLocaleString()}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Expected Returns</p>
            <p className="text-sm text-muted-foreground">{returns}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/projects/${id}`}>
            View Project <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
