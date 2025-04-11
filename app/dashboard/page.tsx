"use client"

import { useState } from "react"
import {
  Battery,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  History,
  LineChart,
  PieChart,
  Plus,
  Wallet,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  const [timeframe, setTimeframe] = useState("month")

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Investor Dashboard</h1>
              <p className="text-muted-foreground">Track your investments and impact across all projects</p>
            </div>
            <div className="flex gap-2">
              <Select defaultValue={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Last Week</SelectItem>
                  <SelectItem value="month">Last Month</SelectItem>
                  <SelectItem value="quarter">Last Quarter</SelectItem>
                  <SelectItem value="year">Last Year</SelectItem>
                  <SelectItem value="all">All Time</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,450</div>
                <p className="text-xs text-muted-foreground">+15% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Returns</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,245</div>
                <p className="text-xs text-muted-foreground">10.2% annual return</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Projects Funded</CardTitle>
                <Battery className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">Across 3 states</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Impact Score</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87</div>
                <p className="text-xs text-muted-foreground">Top 15% of investors</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="portfolio" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
            </TabsList>

            <TabsContent value="portfolio" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Investments</CardTitle>
                  <CardDescription>Overview of your current project investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                            <Battery className="h-4 w-4 text-yellow-800" />
                          </div>
                          <div>
                            <p className="font-medium">Sokoto Solar Farm</p>
                            <p className="text-sm text-muted-foreground">10 tokens @ $100 each</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$1,000</p>
                          <p className="text-sm text-green-600">+12% ROI</p>
                        </div>
                      </div>
                      <Progress value={70} className="h-2" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>70% to completion</span>
                        <span>Est. completion: Aug 2025</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <Battery className="h-4 w-4 text-blue-800" />
                          </div>
                          <div>
                            <p className="font-medium">Lagos Mini-Grid</p>
                            <p className="text-sm text-muted-foreground">5 tokens @ $100 each</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$500</p>
                          <p className="text-sm text-green-600">+10% ROI</p>
                        </div>
                      </div>
                      <Progress value={85} className="h-2" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>85% to completion</span>
                        <span>Est. completion: Jun 2025</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <Battery className="h-4 w-4 text-green-800" />
                          </div>
                          <div>
                            <p className="font-medium">Enugu Clean Water</p>
                            <p className="text-sm text-muted-foreground">8 tokens @ $100 each</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$800</p>
                          <p className="text-sm text-green-600">+8% ROI</p>
                        </div>
                      </div>
                      <Progress value={45} className="h-2" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>45% to completion</span>
                        <span>Est. completion: Dec 2025</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                            <Battery className="h-4 w-4 text-purple-800" />
                          </div>
                          <div>
                            <p className="font-medium">Kano Wind Farm</p>
                            <p className="text-sm text-muted-foreground">5 tokens @ $100 each</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$500</p>
                          <p className="text-sm text-green-600">+11% ROI</p>
                        </div>
                      </div>
                      <Progress value={90} className="h-2" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>90% to completion</span>
                        <span>Est. completion: May 2025</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Investment
                  </Button>
                </CardFooter>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio Allocation</CardTitle>
                    <CardDescription>Distribution of your investments by project type</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">[Portfolio Allocation Chart]</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Returns Over Time</CardTitle>
                    <CardDescription>Historical performance of your investments</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">[Returns Chart]</div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="impact" className="mt-6 space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Homes Powered</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">127</div>
                    <p className="text-xs text-muted-foreground">Your contribution to energy access</p>
                    <div className="mt-4 h-1 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-green-500 w-[65%]" />
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">65% of your impact goal</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">CO₂ Reduction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">42 tons</div>
                    <p className="text-xs text-muted-foreground">Carbon emissions avoided annually</p>
                    <div className="mt-4 h-1 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-green-500 w-[78%]" />
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">78% of your impact goal</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Jobs Created</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">Local employment opportunities</p>
                    <div className="mt-4 h-1 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-green-500 w-[40%]" />
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">40% of your impact goal</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Impact Timeline</CardTitle>
                  <CardDescription>Track the real-world impact of your investments over time</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">[Impact Timeline Chart]</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Impact Certificates</CardTitle>
                  <CardDescription>Verified impact certificates for your investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Battery className="h-5  w-5 text-green-800" />
                        </div>
                        <div>
                          <p className="font-medium">Clean Energy Certificate</p>
                          <p className="text-sm text-muted-foreground">Sokoto Solar Farm</p>
                        </div>
                      </div>
                      <Badge>Verified</Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Battery className="h-5 w-5 text-blue-800" />
                        </div>
                        <div>
                          <p className="font-medium">Carbon Reduction Certificate</p>
                          <p className="text-sm text-muted-foreground">Lagos Mini-Grid</p>
                        </div>
                      </div>
                      <Badge>Verified</Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <Battery className="h-5 w-5 text-purple-800" />
                        </div>
                        <div>
                          <p className="font-medium">Social Impact Certificate</p>
                          <p className="text-sm text-muted-foregroun">Enugu Clean Water</p>
                        </div>
                      </div>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="transactions" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Transaction History</CardTitle>
                      <CardDescription>Your recent investment activities</CardDescription>
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Transactions</SelectItem>
                        <SelectItem value="investment">Investments</SelectItem>
                        <SelectItem value="return">Returns</SelectItem>
                        <SelectItem value="withdrawal">Withdrawals</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Wallet className="h-5 w-5 text-green-800" />
                        </div>
                        <div>
                          <p className="font-medium">Investment</p>
                          <p className="text-sm text-muted-foreground">Sokoto Solar Farm</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$500.00</p>
                        <p className="text-xs text-muted-foreground">Apr 2, 2025</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-blue-800" />
                        </div>
                        <div>
                          <p className="font-medium">Return Payment</p>
                          <p className="text-sm text-muted-foreground">Lagos Mini-Grid</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+$12.50</p>
                        <p className="text-xs text-muted-foreground">Mar 28, 2025</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Wallet className="h-5 w-5 text-green-800" />
                        </div>
                        <div>
                          <p className="font-medium">Investment</p>
                          <p className="text-sm text-muted-foreground">Enugu Clean Water</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$800.00</p>
                        <p className="text-xs text-muted-foreground">Mar 15, 2025</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-blue-800" />
                        </div>
                        <div>
                          <p className="font-medium">Return Payment</p>
                          <p className="text-sm text-muted-foreground">Sokoto Solar Farm</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+$15.00</p>
                        <p className="text-xs text-muted-foreground">Mar 1, 2025</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Wallet className="h-5 w-5 text-green-800" />
                        </div>
                        <div>
                          <p className="font-medium">Investment</p>
                          <p className="text-sm text-muted-foreground">Kano Wind Farm</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$500.00</p>
                        <p className="text-xs text-muted-foreground">Feb 15, 2025</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline">
                    <History className="mr-2 h-4 w-4" />
                    Load More
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Scheduled Payments</CardTitle>
                  <CardDescription>Upcoming return payments from your investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-yellow-800" />
                        </div>
                        <div>
                          <p className="font-medium">Quarterly Return</p>
                          <p className="text-sm text-muted-foreground">Sokoto Solar Farm</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$30.00</p>
                        <p className="text-xs text-muted-foreground">Jun 1, 2025</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-yellow-800" />
                        </div>
                        <div>
                          <p className="font-medium">Quarterly Return</p>
                          <p className="text-sm text-muted-foreground">Lagos Mini-Grid</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$12.50</p>
                        <p className="text-xs text-muted-foreground">Jun 15, 2025</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-yellow-800" />
                        </div>
                        <div>
                          <p className="font-medium">Quarterly Return</p>
                          <p className="text-sm text-muted-foreground">Kano Wind Farm</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$13.75</p>
                        <p className="text-xs text-muted-foreground">Jul 1, 2025</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
