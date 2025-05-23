
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Package, CreditCard, Shield, Check } from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';
import { PerfumeSubmenu } from '../components/PerfumeSubmenu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const BuyPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [isApplying, setIsApplying] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const { toast } = useToast();
  
  const basePrice = 800;
  const discount = discountApplied ? 0.1 : 0; // 10% discount
  const subtotal = basePrice * quantity;
  const discountAmount = subtotal * discount;
  const shipping = 0; // Free shipping
  const total = subtotal - discountAmount + shipping;
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };
  
  const handleApplyDiscount = () => {
    setIsApplying(true);
    
    // Simulate API call
    setTimeout(() => {
      if (discountCode.toUpperCase() === 'SEF10') {
        setDiscountApplied(true);
        toast({
          title: "Discount applied!",
          description: "10% discount has been applied to your order.",
        });
      } else {
        toast({
          title: "Invalid code",
          description: "The discount code you entered is invalid or expired.",
          variant: "destructive",
        });
      }
      setIsApplying(false);
    }, 800);
  };
  
  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order placed!",
      description: "Thank you for your purchase! We'll send you a confirmation email shortly.",
    });
  };
  
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 to-white dark:from-zinc-900 dark:to-zinc-950 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <PerfumeSubmenu activeItem="buy" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto mt-12"
          >
            <h1 className="text-4xl font-bold mb-8 text-amber-900 dark:text-amber-200">Complete Your Purchase</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Order Summary - Left Side */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-6 mb-6">
                  <h2 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-200">Your Order</h2>
                  
                  <div className="flex items-center gap-4 border-b border-amber-100 dark:border-amber-800/30 pb-6">
                    <div className="w-20 h-20 bg-amber-50 dark:bg-amber-900/20 rounded-md overflow-hidden">
                      <img 
                        src="/lovable-uploads/74a04d3e-ab9a-4b78-a725-a456cc8f9394.png" 
                        alt="Sharjah Perfume" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-amber-900 dark:text-amber-200">Sharjah's Signature Scent</h3>
                      <p className="text-sm text-amber-700 dark:text-amber-400">Luxury Perfume - 50ml</p>
                    </div>
                    <div className="whitespace-nowrap">
                      <span className="font-medium text-amber-900 dark:text-amber-200">AED {basePrice}</span>
                    </div>
                  </div>
                  
                  <div className="py-4">
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="quantity" className="text-gray-700 dark:text-gray-300">Quantity:</label>
                      <div className="flex items-center">
                        <button 
                          type="button" 
                          className="w-8 h-8 flex items-center justify-center bg-amber-50 dark:bg-amber-900/20 text-amber-900 dark:text-amber-200 rounded"
                          onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                        >
                          −
                        </button>
                        <input 
                          id="quantity"
                          type="number" 
                          min="1"
                          value={quantity} 
                          onChange={handleQuantityChange}
                          className="w-12 h-8 mx-2 text-center border border-amber-200 dark:border-amber-800/30 rounded bg-white dark:bg-zinc-800 text-amber-900 dark:text-amber-200"
                        />
                        <button 
                          type="button" 
                          className="w-8 h-8 flex items-center justify-center bg-amber-50 dark:bg-amber-900/20 text-amber-900 dark:text-amber-200 rounded"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-4">
                      <Input
                        placeholder="Discount code"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        className="mr-2 border-amber-200 dark:border-amber-800/30"
                      />
                      <Button 
                        onClick={handleApplyDiscount} 
                        disabled={isApplying || discountApplied}
                        className={discountApplied ? "bg-green-600 hover:bg-green-700" : "bg-amber-700 hover:bg-amber-800"}
                      >
                        {isApplying ? 'Applying...' : discountApplied ? (
                          <>
                            <Check className="h-4 w-4 mr-1" />
                            Applied
                          </>
                        ) : 'Apply'}
                      </Button>
                    </div>
                    
                    {discountApplied && (
                      <div className="mt-2 text-sm text-green-600 dark:text-green-500">
                        SEF10 discount code applied! 10% off your purchase.
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-6">
                  <Tabs defaultValue="card">
                    <h2 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-200">Payment Method</h2>
                    
                    <TabsList className="mb-6 bg-amber-50 dark:bg-amber-900/20">
                      <TabsTrigger value="card" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Credit Card
                      </TabsTrigger>
                      <TabsTrigger value="apple-pay" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.0354 5.3467C17.9314 4.28282 17.5577 2.71297 17.0354 1.71685C16.5131 0.720731 15.4194 0 14.4492 0C13.479 0 12.9567 0.534616 12.1869 0.534616C11.4171 0.534616 10.5211 0.186116 9.83804 0.186116C8.41823 0.186116 6.85114 1.3716 6.00345 3.27082C5.15576 5.17004 5.34369 8.79179 7.28465 11.6367C8.25488 13.0594 9.50977 14.6666 11.1027 14.6293C12.3576 14.592 12.8799 13.6705 14.4877 13.6705C16.0954 13.6705 16.5791 14.592 17.9068 14.592C19.2344 14.592 20.4509 13.1693 21.4211 11.7466C22.1909 10.6827 22.513 9.61884 22.5387 9.58157C22.5387 9.54431 19.892 8.6228 19.892 5.75337C19.892 3.2963 22.0291 2.26968 22.0932 2.23242C20.712 0.104051 18.5147 0 17.9068 0" />
                          <path d="M3.5166 20.9513L5.08366 15.8169H7.45173L5.884 20.9513H3.5166Z" />
                          <path d="M10.6491 15.8545C11.3804 15.8545 11.9437 16.1445 12.377 16.7251L12.4645 16.8501L10.2622 17.9314C10.3996 18.4394 10.8467 18.6982 11.4244 18.6982C11.9579 18.6982 12.3821 18.482 12.7509 18.0501H14.2203C13.7737 19.0969 12.6527 19.8532 11.3954 19.8532C9.77075 19.8532 8.5625 18.6982 8.5625 17.1001C8.5625 15.5326 9.77143 14.3695 10.6491 14.3695M11.0463 15.5532C10.5241 15.5532 10.0773 15.8507 9.93969 16.3513L11.5593 15.6645C11.4581 15.5882 11.2893 15.5532 11.0463 15.5532Z" />
                          <path d="M15.9451 21.517V15.8636H17.4532L17.5602 16.4992C17.7941 16.0742 18.3485 15.7992 19.0092 15.7992C20.4336 15.7992 21.4999 16.9517 21.4999 17.8292C21.4999 19.1367 20.3729 20.0142 19.0576 20.0142C18.4483 20.0142 17.9231 19.8005 17.6125 19.4242V21.517H15.9451ZM18.6117 16.9517C18.0576 16.9517 17.6599 17.3292 17.6599 17.8367C17.6599 18.3442 18.0576 18.7217 18.6117 18.7217C19.1659 18.7217 19.5636 18.3442 19.5636 17.8367C19.5636 17.3292 19.1659 16.9517 18.6117 16.9517Z" />
                          <path d="M0 16.6814C0 15.5051 0.930872 14.5576 2.2084 14.5576C3.48592 14.5576 4.42372 15.5051 4.42372 16.6814C4.42372 17.8576 3.4777 18.8051 2.2084 18.8051C0.939092 18.8051 0 17.8662 0 16.6814ZM3.1516 16.6814C3.1516 16.1739 2.7539 15.7964 2.1998 15.7964C1.64568 15.7964 1.24799 16.1739 1.24799 16.6814C1.24799 17.1889 1.64568 17.5664 2.1998 17.5664C2.7539 17.5664 3.1516 17.1889 3.1516 16.6814Z" />
                        </svg>
                        Apple Pay
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="card">
                      <form onSubmit={handleSubmitOrder}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="md:col-span-2">
                            <Label htmlFor="cardName" className="text-gray-700 dark:text-gray-300">Name on Card</Label>
                            <Input 
                              id="cardName" 
                              placeholder="John Smith" 
                              className="mt-1 border-amber-200 dark:border-amber-800/30" 
                              required 
                            />
                          </div>
                          
                          <div className="md:col-span-2">
                            <Label htmlFor="cardNumber" className="text-gray-700 dark:text-gray-300">Card Number</Label>
                            <Input 
                              id="cardNumber" 
                              placeholder="1234 5678 9012 3456" 
                              className="mt-1 border-amber-200 dark:border-amber-800/30" 
                              required 
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="expiry" className="text-gray-700 dark:text-gray-300">Expiry Date</Label>
                            <Input 
                              id="expiry" 
                              placeholder="MM/YY"
                              className="mt-1 border-amber-200 dark:border-amber-800/30" 
                              required 
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="cvc" className="text-gray-700 dark:text-gray-300">CVC</Label>
                            <Input 
                              id="cvc" 
                              placeholder="123" 
                              className="mt-1 border-amber-200 dark:border-amber-800/30" 
                              required 
                            />
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold mb-4 text-amber-900 dark:text-amber-200">Shipping Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="md:col-span-2">
                            <Label htmlFor="fullName" className="text-gray-700 dark:text-gray-300">Full Name</Label>
                            <Input 
                              id="fullName" 
                              placeholder="John Smith" 
                              className="mt-1 border-amber-200 dark:border-amber-800/30" 
                              required 
                            />
                          </div>
                          
                          <div className="md:col-span-2">
                            <Label htmlFor="address" className="text-gray-700 dark:text-gray-300">Address</Label>
                            <Input 
                              id="address" 
                              placeholder="123 Main St" 
                              className="mt-1 border-amber-200 dark:border-amber-800/30" 
                              required 
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="city" className="text-gray-700 dark:text-gray-300">City</Label>
                            <Input 
                              id="city" 
                              placeholder="Sharjah" 
                              className="mt-1 border-amber-200 dark:border-amber-800/30" 
                              required 
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="phoneNumber" className="text-gray-700 dark:text-gray-300">Phone Number</Label>
                            <Input 
                              id="phoneNumber" 
                              placeholder="+971 50 123 4567" 
                              className="mt-1 border-amber-200 dark:border-amber-800/30" 
                              required 
                            />
                          </div>
                          
                          <div className="md:col-span-2">
                            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                            <Input 
                              id="email" 
                              type="email" 
                              placeholder="john@example.com" 
                              className="mt-1 border-amber-200 dark:border-amber-800/30" 
                              required 
                            />
                          </div>
                        </div>
                      </form>
                    </TabsContent>
                    
                    <TabsContent value="apple-pay">
                      <div className="text-center py-10">
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-xl mb-4 max-w-md mx-auto">
                          <div className="text-2xl font-bold text-amber-900 dark:text-amber-200 mb-2">
                            AED {total.toFixed(2)}
                          </div>
                          <div className="text-amber-700 dark:text-amber-400 mb-4">
                            Sharjah's Signature Scent × {quantity}
                          </div>
                          <Button className="w-full bg-black text-white hover:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.0354 5.3467C17.9314 4.28282 17.5577 2.71297 17.0354 1.71685C16.5131 0.720731 15.4194 0 14.4492 0C13.479 0 12.9567 0.534616 12.1869 0.534616C11.4171 0.534616 10.5211 0.186116 9.83804 0.186116C8.41823 0.186116 6.85114 1.3716 6.00345 3.27082C5.15576 5.17004 5.34369 8.79179 7.28465 11.6367C8.25488 13.0594 9.50977 14.6666 11.1027 14.6293C12.3576 14.592 12.8799 13.6705 14.4877 13.6705C16.0954 13.6705 16.5791 14.592 17.9068 14.592C19.2344 14.592 20.4509 13.1693 21.4211 11.7466C22.1909 10.6827 22.513 9.61884 22.5387 9.58157C22.5387 9.54431 19.892 8.6228 19.892 5.75337C19.892 3.2963 22.0291 2.26968 22.0932 2.23242C20.712 0.104051 18.5147 0 17.9068 0" />
                              <path d="M3.5166 20.9513L5.08366 15.8169H7.45173L5.884 20.9513H3.5166Z" />
                              <path d="M10.6491 15.8545C11.3804 15.8545 11.9437 16.1445 12.377 16.7251L12.4645 16.8501L10.2622 17.9314C10.3996 18.4394 10.8467 18.6982 11.4244 18.6982C11.9579 18.6982 12.3821 18.482 12.7509 18.0501H14.2203C13.7737 19.0969 12.6527 19.8532 11.3954 19.8532C9.77075 19.8532 8.5625 18.6982 8.5625 17.1001C8.5625 15.5326 9.77143 14.3695 10.6491 14.3695M11.0463 15.5532C10.5241 15.5532 10.0773 15.8507 9.93969 16.3513L11.5593 15.6645C11.4581 15.5882 11.2893 15.5532 11.0463 15.5532Z" />
                              <path d="M15.9451 21.517V15.8636H17.4532L17.5602 16.4992C17.7941 16.0742 18.3485 15.7992 19.0092 15.7992C20.4336 15.7992 21.4999 16.9517 21.4999 17.8292C21.4999 19.1367 20.3729 20.0142 19.0576 20.0142C18.4483 20.0142 17.9231 19.8005 17.6125 19.4242V21.517H15.9451ZM18.6117 16.9517C18.0576 16.9517 17.6599 17.3292 17.6599 17.8367C17.6599 18.3442 18.0576 18.7217 18.6117 18.7217C19.1659 18.7217 19.5636 18.3442 19.5636 17.8367C19.5636 17.3292 19.1659 16.9517 18.6117 16.9517Z" />
                              <path d="M0 16.6814C0 15.5051 0.930872 14.5576 2.2084 14.5576C3.48592 14.5576 4.42372 15.5051 4.42372 16.6814C4.42372 17.8576 3.4777 18.8051 2.2084 18.8051C0.939092 18.8051 0 17.8662 0 16.6814ZM3.1516 16.6814C3.1516 16.1739 2.7539 15.7964 2.1998 15.7964C1.64568 15.7964 1.24799 16.1739 1.24799 16.6814C1.24799 17.1889 1.64568 17.5664 2.1998 17.5664C2.7539 17.5664 3.1516 17.1889 3.1516 16.6814Z" />
                            </svg>
                            Pay with Apple Pay
                          </Button>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          You'll be redirected to complete your payment securely.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
              
              {/* Order Summary - Right Side */}
              <div>
                <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-6 sticky top-6">
                  <h2 className="text-xl font-bold mb-6 text-amber-900 dark:text-amber-200">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">Subtotal</span>
                      <span className="font-medium text-amber-900 dark:text-amber-200">AED {subtotal.toFixed(2)}</span>
                    </div>
                    
                    {discountApplied && (
                      <div className="flex justify-between text-green-600 dark:text-green-500">
                        <span>Discount (10%)</span>
                        <span>-AED {discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">Shipping</span>
                      <span className="font-medium text-green-600 dark:text-green-500">Free</span>
                    </div>
                    
                    <Separator className="bg-amber-100 dark:bg-amber-800/30" />
                    
                    <div className="flex justify-between">
                      <span className="font-bold text-amber-900 dark:text-amber-200">Total</span>
                      <span className="font-bold text-lg text-amber-900 dark:text-amber-200">AED {total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleSubmitOrder} 
                    className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                    size="lg"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Complete Order
                  </Button>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <Package className="h-4 w-4 text-amber-700 dark:text-amber-400" />
                      <span>Free shipping across UAE</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-700 dark:text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 12 2 2 4-4" />
                        <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
                      </svg>
                      <span>30-day satisfaction guarantee</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <Shield className="h-4 w-4 text-amber-700 dark:text-amber-400" />
                      <span>Secure payment processing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BuyPage;
