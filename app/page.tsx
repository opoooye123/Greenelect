import Link from "next/link"
import { ArrowRight, BarChart3, Globe, Leaf, LightbulbIcon, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { StatsCard } from "@/components/stats-card"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Leaf className="h-6 w-6 text-green-600" />
            <span>GreenChain</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="/projects"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Projects
              </Link>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Dashboard
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Button>Connect Wallet</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section className="container py-12 space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Impact Statistics</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Track the real-world impact of clean energy investments across Nigeria
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              icon={<Zap className="h-6 w-6 text-yellow-500" />}
              title="Total Energy Generated"
              value="1.2 MW"
              description="Clean energy produced"
            />
            <StatsCard
              icon={<LightbulbIcon className="h-6 w-6 text-yellow-500" />}
              title="Homes Powered"
              value="3,240"
              description="Households with electricity"
            />
            <StatsCard
              icon={<Globe className="h-6 w-6 text-green-500" />}
              title="CO₂ Reduction"
              value="450 tons"
              description="Carbon emissions avoided"
            />
            <StatsCard
              icon={<BarChart3 className="h-6 w-6 text-blue-500" />}
              title="Total Invested"
              value="$2.4M"
              description="Funding for clean energy"
            />
          </div>
        </section>

        <section className="container py-12 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Invest in tokenized clean energy projects across Nigeria
              </p>
            </div>
            <Button asChild>
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

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
          </div>
        </section>

        <section className="bg-muted py-12">
          <div className="container space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Investing in clean energy has never been easier
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <CardTitle>Browse Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Explore verified clean energy projects across Nigeria with detailed information and impact metrics.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <CardTitle>Invest with Tokens</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Purchase project tokens using cryptocurrency. Each token represents partial ownership in the
                    project.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <CardTitle>Earn Returns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Receive regular returns from energy credits or usage fees while tracking the project's real-world
                    impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Leaf className="h-5 w-5 text-green-600" />
            <span>GreenChain</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 GreenChain. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
