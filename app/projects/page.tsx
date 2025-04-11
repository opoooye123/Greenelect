import { Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProjectCard } from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Clean Energy Projects</h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover and invest in tokenized clean energy projects across Nigeria
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search projects..." className="w-full pl-8" />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Energy Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="solar">Solar</SelectItem>
                    <SelectItem value="wind">Wind</SelectItem>
                    <SelectItem value="hydro">Hydro</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="water">Clean Water</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="lagos">Lagos</SelectItem>
                    <SelectItem value="abuja">Abuja</SelectItem>
                    <SelectItem value="kano">Kano</SelectItem>
                    <SelectItem value="enugu">Enugu</SelectItem>
                    <SelectItem value="sokoto">Sokoto</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="new">New</TabsTrigger>
                <TabsTrigger value="funded">Fully Funded</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    id="1"
                    title="Sokoto Solar Farm"
                    location="Sokoto State"
                    image="/images/solar-farm.jpg"
                    description="Large-scale solar installation providing power to 500+ homes in rural Sokoto"
                    fundingGoal={120000}
                    fundingRaised={85000}
                    energyType="solar"
                    returns="12% annually"
                  />
                  <ProjectCard
                    id="2"
                    title="Lagos Mini-Grid"
                    location="Lagos State"
                    image="/images/mini-grid.jpg"
                    description="Community-owned mini-grid serving small businesses and homes in suburban Lagos"
                    fundingGoal={75000}
                    fundingRaised={62000}
                    energyType="hybrid"
                    returns="10% annually"
                  />
                  <ProjectCard
                    id="3"
                    title="Enugu Clean Water"
                    location="Enugu State"
                    image="/images/clean-water.jpg"
                    description="Solar-powered clean water system serving 5 villages in rural Enugu"
                    fundingGoal={50000}
                    fundingRaised={23000}
                    energyType="water"
                    returns="8% annually"
                  />
                  <ProjectCard
                    id="4"
                    title="Abuja Community Solar"
                    location="Abuja FCT"
                    image="/images/community-solar.jpg"
                    description="Rooftop solar installations for a community of 200 homes in peri-urban Abuja"
                    fundingGoal={90000}
                    fundingRaised={15000}
                    energyType="solar"
                    returns="9% annually"
                  />
                  <ProjectCard
                    id="5"
                    title="Kano Wind Farm"
                    location="Kano State"
                    image="/images/wind-farm.jpg"
                    description="Small-scale wind farm providing supplemental power to local businesses"
                    fundingGoal={150000}
                    fundingRaised={120000}
                    energyType="wind"
                    returns="11% annually"
                  />
                  <ProjectCard
                    id="6"
                    title="Calabar Hydro Project"
                    location="Cross River State"
                    image="/images/hydro-project.jpg"
                    description="Micro-hydro installation on local river providing consistent clean energy"
                    fundingGoal={200000}
                    fundingRaised={180000}
                    energyType="hydro"
                    returns="13% annually"
                  />
                </div>
              </TabsContent>
              <TabsContent value="trending" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    id="1"
                    title="Sokoto Solar Farm"
                    location="Sokoto State"
                    image="/images/solar-farm.jpg"
                    description="Large-scale solar installation providing power to 500+ homes in rural Sokoto"
                    fundingGoal={120000}
                    fundingRaised={85000}
                    energyType="solar"
                    returns="12% annually"
                  />
                  <ProjectCard
                    id="5"
                    title="Kano Wind Farm"
                    location="Kano State"
                    image="/images/wind-farm.jpg"
                    description="Small-scale wind farm providing supplemental power to local businesses"
                    fundingGoal={150000}
                    fundingRaised={120000}
                    energyType="wind"
                    returns="11% annually"
                  />
                  <ProjectCard
                    id="2"
                    title="Lagos Mini-Grid"
                    location="Lagos State"
                    image="/images/mini-grid.jpg"
                    description="Community-owned mini-grid serving small businesses and homes in suburban Lagos"
                    fundingGoal={75000}
                    fundingRaised={62000}
                    energyType="hybrid"
                    returns="10% annually"
                  />
                </div>
              </TabsContent>
              <TabsContent value="new" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    id="4"
                    title="Abuja Community Solar"
                    location="Abuja FCT"
                    image="/images/community-solar.jpg"
                    description="Rooftop solar installations for a community of 200 homes in peri-urban Abuja"
                    fundingGoal={90000}
                    fundingRaised={15000}
                    energyType="solar"
                    returns="9% annually"
                  />
                  <ProjectCard
                    id="3"
                    title="Enugu Clean Water"
                    location="Enugu State"
                    image="/images/clean-water.jpg"
                    description="Solar-powered clean water system serving 5 villages in rural Enugu"
                    fundingGoal={50000}
                    fundingRaised={23000}
                    energyType="water"
                    returns="8% annually"
                  />
                </div>
              </TabsContent>
              <TabsContent value="funded" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    id="6"
                    title="Calabar Hydro Project"
                    location="Cross River State"
                    image="/images/hydro-project.jpg"
                    description="Micro-hydro installation on local river providing consistent clean energy"
                    fundingGoal={200000}
                    fundingRaised={180000}
                    energyType="hydro"
                    returns="13% annually"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}
