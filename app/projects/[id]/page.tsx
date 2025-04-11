import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  BarChart3,
  Calendar,
  Clock,
  Globe,
  Info,
  Leaf,
  LightbulbIcon,
  MapPin,
  Users,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // This would normally fetch data based on the ID
  const project = {
    id: params.id,
    title: "Sokoto Solar Farm",
    location: "Sokoto State, Nigeria",
    description:
      "Large-scale solar installation providing power to 500+ homes in rural Sokoto. This project aims to bring reliable electricity to communities that have been underserved by traditional power infrastructure.",
    longDescription:
      "The Sokoto Solar Farm is a 2MW solar installation that will provide clean, renewable energy to over 500 homes and businesses in rural Sokoto State. The project includes battery storage to ensure consistent power supply even during nighttime hours.\n\nThis region currently relies on expensive diesel generators or has no electricity access at all. By implementing this solar farm, we can reduce energy costs by up to 60% while providing a more reliable power source.\n\nThe project will be community-owned, with local residents receiving training for maintenance and operations roles. This creates sustainable employment while ensuring the long-term success of the installation.",
    image: "/images/solar-farm.jpg",
    fundingGoal: 120000,
    fundingRaised: 85000,
    energyType: "solar",
    returns: "12% annually",
    timeline: "18 months",
    impact: {
      homesPowered: 520,
      co2Reduction: "750 tons annually",
      jobsCreated: 25,
    },
    updates: [
      {
        date: "March 15, 2025",
        title: "Land secured and permits approved",
        description:
          "We've successfully secured the 5-acre land parcel and received all necessary permits from local authorities.",
      },
      {
        date: "February 28, 2025",
        title: "Community engagement completed",
        description:
          "Finished our series of community meetings with local residents to address concerns and incorporate feedback.",
      },
    ],
    team: [
      {
        name: "Amina Ibrahim",
        role: "Project Lead",
        bio: "Renewable energy engineer with 10+ years of experience in solar installations across West Africa.",
      },
      {
        name: "Chidi Okonkwo",
        role: "Community Liaison",
        bio: "Local resident with deep connections to the community and experience in stakeholder management.",
      },
      {
        name: "Dr. Fatima Bello",
        role: "Technical Advisor",
        bio: "PhD in Electrical Engineering with specialization in off-grid energy solutions for rural communities.",
      },
    ],
  }

  const percentFunded = Math.round((project.fundingRaised / project.fundingGoal) * 100)

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      Solar
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </Badge>
                  </div>
                  <h1 className="text-3xl font-bold">{project.title}</h1>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Funding Progress</span>
                      <span className="font-medium">{percentFunded}%</span>
                    </div>
                    <Progress value={percentFunded} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>${project.fundingRaised.toLocaleString()} raised</span>
                      <span>Goal: ${project.fundingGoal.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Expected Returns</p>
                      <p className="font-medium">{project.returns}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Project Timeline</p>
                      <p className="font-medium">{project.timeline}</p>
                    </div>
                  </div>

                  <Button className="w-full">Invest Now</Button>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="details" className="mt-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
              <TabsTrigger value="updates">Updates</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-6 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Project Overview</h2>
                <div className="space-y-4">
                  {project.longDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Project Details</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        Energy Type
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold capitalize">Solar</p>
                      <p className="text-xs text-muted-foreground">Photovoltaic panels with battery storage</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        Timeline
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{project.timeline}</p>
                      <p className="text-xs text-muted-foreground">From funding to completion</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-green-500" />
                        Returns
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{project.returns}</p>
                      <p className="text-xs text-muted-foreground">Paid quarterly in stablecoins</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Token Information</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Token Structure</CardTitle>
                      <CardDescription>How the project is tokenized</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Token Name:</span>
                        <span className="text-sm font-medium">SOKOTO-SOLAR</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Token Standard:</span>
                        <span className="text-sm font-medium">ERC-1155</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Total Supply:</span>
                        <span className="text-sm font-medium">1,200 Tokens</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Price Per Token:</span>
                        <span className="text-sm font-medium">$100 USD</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Blockchain:</span>
                        <span className="text-sm font-medium">Arbitrum</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Revenue Distribution</CardTitle>
                      <CardDescription>How returns are generated and distributed</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Revenue Source:</span>
                        <span className="text-sm font-medium">Energy Sales</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Payment Frequency:</span>
                        <span className="text-sm font-medium">Quarterly</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Token Holder Share:</span>
                        <span className="text-sm font-medium">80%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Community Fund:</span>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Maintenance Reserve:</span>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="impact" className="mt-6 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Environmental & Social Impact</h2>
                <p>
                  The Sokoto Solar Farm project delivers significant environmental and social benefits to the local
                  community and beyond.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <LightbulbIcon className="h-4 w-4 text-yellow-500" />
                      Homes Powered
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{project.impact.homesPowered}</p>
                    <p className="text-xs text-muted-foreground">Households with reliable electricity</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Globe className="h-4 w-4 text-green-500" />
                      CO₂ Reduction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{project.impact.co2Reduction}</p>
                    <p className="text-xs text-muted-foreground">Carbon emissions avoided</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-500" />
                      Jobs Created
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{project.impact.jobsCreated}</p>
                    <p className="text-xs text-muted-foreground">Local employment opportunities</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Sustainable Development Goals</h2>
                <p>This project contributes to the following UN Sustainable Development Goals:</p>

                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                  <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
                    <div className="bg-yellow-100 text-yellow-800 w-12 h-12 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium text-center">7: Affordable and Clean Energy</p>
                  </div>

                  <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
                    <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium text-center">8: Decent Work and Economic Growth</p>
                  </div>

                  <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
                    <div className="bg-green-100 text-green-800 w-12 h-12 rounded-full flex items-center justify-center">
                      <Leaf className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium text-center">13: Climate Action</p>
                  </div>

                  <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
                    <div className="bg-purple-100 text-purple-800 w-12 h-12 rounded-full flex items-center justify-center">
                      <Globe className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium text-center">17: Partnerships for the Goals</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Impact Verification</h2>
                <p>
                  All impact metrics are independently verified by third-party auditors. Real-time data from the project
                  is recorded on-chain to ensure transparency and accountability.
                </p>

                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Info className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Impact Tracking</p>
                      <p className="text-sm text-muted-foreground">
                        Energy production data is collected via IoT sensors and published to the blockchain hourly.
                        Token holders can view real-time impact metrics through the dashboard.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="updates" className="mt-6 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Project Updates</h2>
                <p>Follow the latest developments and milestones for the Sokoto Solar Farm project.</p>
              </div>

              <div className="space-y-6">
                {project.updates.map((update, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>{update.title}</CardTitle>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {update.date}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{update.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="team" className="mt-6 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Project Team</h2>
                <p>Meet the dedicated professionals bringing the Sokoto Solar Farm to life.</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {project.team.map((member, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-muted mb-2 flex items-center justify-center">
                        <Users className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
